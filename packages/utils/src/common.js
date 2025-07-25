import { isObject } from "./is";
// Copied from https://github.com/meteorlxy/vscode-slugify
export const slugify = (str) =>
  encodeURI(
    str
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace whitespace with -
      .replace(
        /[\]\[\!\'\#\$\%\&\(\)\*\+\,\.\/\:\;\<\=\>\?\@\\\^\_\{\|\}\~\`。，、；：？！…—·ˉ¨‘’“”々～‖∶＂＇｀｜〃〔〕〈〉《》「」『』．〖〗【】（）［］｛｝]/g,
        ""
      ) // Remove known punctuators
      .replace(/^\-+/, "") // Remove leading -
      .replace(/\-+$/, "") // Remove trailing -
  );
export const htmlEscape = (str) => {
  const escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  };
  return str.replace(/[&<>'"]/g, (char) => escapeMap[char]);
};
export const copy = (obj) => {
  if (isObject(obj)) return JSON.parse(JSON.stringify(obj));
  throw new Error("Input must be a non-null object.");
};
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const now = () => Date.now();
export const arrayify = (value) => (Array.isArray(value) ? value : [value]);
