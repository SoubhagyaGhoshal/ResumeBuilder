export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type ValueOf<T> = T[keyof T];

export type PartialWithRequired<T, K extends keyof T> = Partial<T> & Pick<T, K>;

// https://stackoverflow.com/questions/55541275/typescript-check-for-the-any-type
// https://github.com/vueuse/vueuse/blob/main/packages/shared/utils/types.ts
export type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;
export type IsAny<T> = IfAny<T, true, false>;

export type UnknownFunction = (...args: unknown[]) => unknown;

export type Callback<T> =
  IsAny<T> extends true
    ? (param: unknown) => void
    : [T] extends [void]
      ? () => void
      : (param: T) => void;
