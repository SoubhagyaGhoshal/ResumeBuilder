import * as localForage from "localforage";
import { isObject, isInteger, arrayify } from "@renovamen/utils";
import type { ValidVersion } from "~/composables/constant";
import type { ResumeStyles } from "~/composables/stores/style";
import type { DbResume } from "./db";
import type { ValidStorageJsonData } from "./migrate";

/**
 * Write resume styles from local storage to the store
 *
 * @param styles resume styles
 */
const setResumeStyles = async (styles: ResumeStyles) => {
  const { setStyle } = useStyleStore();

  for (const [key, value] of Object.entries(styles)) {
    await setStyle(key as keyof ResumeStyles, value);
  }
};

/**
 * Write resume data from local storage to the store
 *
 * @param data resume data
 */
export const setResume = async (data: DbResume) => {
  const { setData } = useDataStore();

  setData("resumeId", data.id);
  setData("resumeName", data.name);

  setData("markdown", data.markdown);
  setData("css", data.css);

  await setResumeStyles(data.styles);
};

const _checkType = (value: unknown, required: string | string[]) => {
  return arrayify(required).includes(typeof value);
};

const _getNestedValue = (object: unknown, path: string): unknown => {
  if (typeof object !== "object" || object === null) return undefined;
  return path.split(".").reduce<unknown>((o, p) => {
    if (o && typeof o === "object" && p in o) {
      return (o as Record<string, unknown>)[p];
    }
    return undefined;
  }, object);
};

const _checkObject = (
  obj: unknown,
  fields: Array<{ fields: string | string[]; types: string | string[] }>
): boolean => {
  if (typeof obj !== "object" || obj === null) return false;
  return fields.every(({ fields, types }) =>
    arrayify(fields).every((field) => _checkType(_getNestedValue(obj, field), types))
  );
};

export class IsValid {
  static font = (font: unknown) => {
    if (typeof font !== "object" || font === null) return false;
    const f = font as { name?: unknown; fontFamily?: unknown };
    return (
      typeof f.name === "string" &&
      (typeof f.fontFamily === "string" || typeof f.fontFamily === "undefined")
    );
  };

  static importedData = (data: unknown, version: unknown) => {
    const { VERSION } = useConstant();

    return (
      // Check version
      typeof version === "string" &&
      VERSION.isVersionValid(version) &&
      // Check data
      isObject(data) &&
      typeof data === "object" &&
      data !== null &&
      Object.entries(data).every(
        ([id, item]) =>
          isInteger(id, { allowString: true }) &&
          _checkObject(item, VERSION.REQUIRED_DATA_TYPES[version as ValidVersion])
      )
    );
  };

  static importedJson(
    json: unknown
  ): false | { version: ValidVersion; data: ValidStorageJsonData } {
    if (
      typeof json !== "object" ||
      json === null ||
      !("version" in json) ||
      !("data" in json)
    ) {
      return false;
    }
    const { version, data } = json as {
      version: ValidVersion;
      data: ValidStorageJsonData;
    };
    return { version, data };
  }
}

export class StorageVersion {
  static get = async (): Promise<ValidVersion | null> => {
    const { VERSION } = useConstant();
    return await localForage.getItem<ValidVersion>(VERSION.VERSION_KEY);
  };

  static update = async () => {
    const { VERSION } = useConstant();
    await localForage.setItem(VERSION.VERSION_KEY, VERSION.CURRENT);
    return VERSION.CURRENT;
  };
}
