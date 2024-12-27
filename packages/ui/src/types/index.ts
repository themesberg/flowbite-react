export type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K ? never : K]: T[K];
};

export type DynamicStringEnum<T> = T | (string & {});

export type DynamicStringEnumKeysOf<T extends object> = DynamicStringEnum<keyof RemoveIndexSignature<T>>;

export type ResetTheme<T> = T extends object ? { [K in keyof T]?: ResetTheme<T[K]> } | boolean : boolean;

export interface ThemingProps<T> {
  theme?: DeepPartial<T>;
  resetTheme?: ResetTheme<T>;
  applyTheme?: "merge" | "replace";
}
