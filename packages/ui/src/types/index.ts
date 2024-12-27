export type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K ? never : K]: T[K];
};

export type DynamicStringEnum<T> = T | (string & {});

export type DynamicStringEnumKeysOf<T extends object> = DynamicStringEnum<keyof RemoveIndexSignature<T>>;

export type DeepPartialOf<T, V> = T extends object ? { [K in keyof T]?: DeepPartialOf<T[K], V> } | V : V;

export type DeepPartialBoolean<T> = DeepPartialOf<T, boolean>;
export type DeepPartialApplyTheme<T> = DeepPartialOf<T, ApplyTheme>;
export type ApplyTheme = "merge" | "replace";

export interface ThemingProps<T> {
  theme?: DeepPartial<T>;
  resetTheme?: DeepPartialBoolean<T>;
  applyTheme?: DeepPartialApplyTheme<T>;
}
