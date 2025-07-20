/**
 * @fileoverview This file is modified from https://github.com/antfu/case-police/blob/main/packages/case-police/src/utils.ts.
 *
 * The original file relies on Node.js APIs, which are removed in this file, so that
 * this package can be used in the browser environment.
 */
import abbreviates from "case-police/dict/abbreviates.json";
import brands from "case-police/dict/brands.json";
import general from "case-police/dict/general.json";
import products from "case-police/dict/products.json";
import softwares from "case-police/dict/softwares.json";
export const DISABLE_KEY = "@case-police-disable";
export const IGNORE_REGEX = /@case-police-ignore\s+([^\s]+)/g;
export const UTF8_RANGE = "[\u0080-\uFFFF]";
export const AVALIABLE_PRESETS = {
  softwares,
  products,
  general,
  brands,
  abbreviates
};
export function buildRegex(dictionary) {
  const keys = Object.keys(dictionary);
  const regex = new RegExp(`\\b(${keys.join("|").replace(/\+/g, "\\+")})\\b`, "gi");
  return regex;
}
export function replaceCore(code, dict, ignore = [], output, regex) {
  regex = regex || buildRegex(dict);
  Array.from(code.matchAll(IGNORE_REGEX)).forEach((match) => {
    const [, key] = match;
    ignore.push(
      ...key
        .split(",")
        .map((k) => k.trim().toLowerCase())
        .filter(Boolean)
    );
  });
  const changed = [];
  code = code.replace(regex, (_, from, index) => {
    if (containsUTF8(code, from, index)) return _;
    if (!from.match(/[A-Z]/) || !from.match(/[a-z]/)) return _;
    const lower = from.toLowerCase();
    if (ignore.includes(lower)) return _;
    const to = dict[lower];
    if (!to || to === from) return _;
    changed.push({ from, to, index });
    output?.(code, index, from, to);
    return to;
  });
  if (changed.length) return { code, changed };
}
function containsUTF8(code, key, index) {
  const utf8Regex = new RegExp(`${UTF8_RANGE}`);
  const head = code.charAt(index - 1);
  const tail = code.charAt(index + key.length);
  return utf8Regex.test(head) || utf8Regex.test(tail);
}
export function loadPresets(presets) {
  presets = presets ?? Object.keys(AVALIABLE_PRESETS);
  return presets.reduce(
    (dictionary, preset) => ({
      ...dictionary,
      ...AVALIABLE_PRESETS[preset]
    }),
    {}
  );
}
