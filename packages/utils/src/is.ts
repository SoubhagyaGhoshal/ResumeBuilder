export const isClient = typeof window !== "undefined" && typeof document !== "undefined";

export const isMac =
  isClient && typeof navigator !== "undefined" && /Macintosh/.test(navigator.userAgent);

export const isExternal = (path: string) => {
  const outboundRE = /^(https?:|mailto:|tel:)/;
  return outboundRE.test(path);
};

export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === "function";
}

export const isInteger = (v: unknown, { allowString = false } = {}): boolean => {
  if (typeof v === "number") return Number.isInteger(v);
  if (allowString && typeof v === "string") return /^-?\d+$/.test(v);
  return false;
};
