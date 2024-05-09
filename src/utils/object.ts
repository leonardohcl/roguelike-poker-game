import Dictionary from "@/types/Dictionary";

export function getMappedValue<T>(obj: Dictionary<any>, key: string): T | undefined {
  if (!key) return undefined;
  const levels = key.split(".");
  let value = obj;
  levels.forEach((level) => {
    value = value[level];
  });
  return value as T;
}
