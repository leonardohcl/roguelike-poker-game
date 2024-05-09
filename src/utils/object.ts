import Dictionary from "@/types/Dictionary";

export function getMappedValue<T>(
  obj: Dictionary<any>,
  key: string
): T | undefined {
  if (!key) return undefined;
  const levels = key.split(".");
  let value = obj;
  levels.forEach((level) => {
    value = value[level];
  });
  return value as T;
}

export function forEachKey(obj: Dictionary<any>, fn: (key: string, value: any) => void) {
  Object.keys(obj).forEach((key) => fn(key, obj[key]));
}
