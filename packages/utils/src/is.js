export const isClient = typeof window !== "undefined" && typeof document !== "undefined";
export const isMac =
  isClient && typeof navigator !== "undefined" && /Macintosh/.test(navigator.userAgent);
export const isExternal = (path) => {
  const outboundRE = /^(https?:|mailto:|tel:)/;
  return outboundRE.test(path);
};
export const isObject = (v) => toString.call(v) === "[object Object]";
export const isInteger = (v, { allowString = false } = {}) => {
  return typeof v === "number"
    ? Number.isInteger(v)
    : allowString && typeof v === "string" && Number.isInteger(Number(v));
};
