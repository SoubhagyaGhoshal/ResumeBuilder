// Adapted from and improved upon https://github.com/jxson/front-matter
import * as yamlParser from "js-yaml";
const OPTIONAL_BYTE_ORDER_MARK = "\\ufeff?";
const PLATFORM = typeof process !== "undefined" ? process.platform : "";
const PATTERN =
  "^(" +
  OPTIONAL_BYTE_ORDER_MARK +
  "(= yaml =|---)" +
  "$([\\s\\S]*?)" +
  "^(?:\\2|\\.\\.\\.)\\s*" +
  "$" +
  (PLATFORM === "win32" ? "\\r?" : "") +
  "(?:\\n)?)";
export class FrontMatterParser {
  options;
  _lastFrontMatter = {};
  constructor(options = {}) {
    this.options = options;
    this.options.errorBehavior = options.errorBehavior || "error";
  }
  _emptyResults = (body) => ({
    frontMatter: {},
    body,
    bodyBegin: 1
  });
  /**
   * Get the line number where the body begins.
   */
  _bodyBegin(match, content) {
    const offset = match.index + match[0].length;
    const lines = content.slice(0, offset).split("\n");
    return lines.length;
  }
  /**
   * Split the content into front matter and body.
   *
   * @param content Markdown content, including front matter and body.
   * @returns
   * - `false` if the content does not contain front matter
   * - `{ frontMatterString, body, bodyBegin }` if contains
   * @see {@link FrontMatterResults}
   */
  split(content) {
    const regex = new RegExp(PATTERN, "m");
    const match = regex.exec(content);
    if (!match) return false;
    const frontMatterString = match[match.length - 1].trim();
    const body = content.slice(match[0].length);
    const bodyBegin = this._bodyBegin(match, content);
    return {
      frontMatterString,
      body,
      bodyBegin
    };
  }
  _parse(content) {
    const split = this.split(content);
    if (!split) return this._emptyResults(content);
    try {
      const frontMatter = yamlParser.load(split.frontMatterString) || {};
      this._lastFrontMatter = frontMatter;
      return { ...split, frontMatter };
    } catch (e) {
      const frontMatter =
        this.options.errorBehavior === "error"
          ? (() => {
              throw e;
            })()
          : this.options.errorBehavior === "last"
            ? this._lastFrontMatter
            : {};
      return { ...split, frontMatter };
    }
  }
  /**
   * Extract and parse front matter from a markdown document. A front matter should look like:
   *
   * ```
   * ---
   * key: value
   * ---
   * ```
   *
   * @param content Markdown content, including front matter and body.
   * @returns `{ body, bodyBegin, frontMatter, frontMatterString }`
   * @see {@link FrontMatterResults}
   */
  parse(content) {
    const lines = content.split(/(\r?\n)/);
    if (lines[0] && /= yaml =|---/.test(lines[0])) {
      return this._parse(content);
    } else {
      return this._emptyResults(content);
    }
  }
}
