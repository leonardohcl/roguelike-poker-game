import Dictionary from "@/types/Dictionary";
import { getMappedValue } from "./object";

export function remove<T>(list: Array<T>, el: T) {
  const idx = list.indexOf(el);
  if (idx < 0) return;
  return list.splice(idx, 1);
}

export function maxBy<T>(list: Array<T>, key: string) {
  let max = list[0];
  let maxValue = getMappedValue<number>(max as Dictionary, key) ?? 0
  list.forEach((el) => {
    const value = getMappedValue<number>(el as Dictionary, key) ?? 0
    if (value > maxValue) {
      max = el;
      maxValue = value
    }
  });
  return max;
}

export function countBy(list: Dictionary[], keys: string[]) {
  const count: Dictionary<Dictionary<number>> = {};
  list.forEach((el) => {
    keys.forEach((key) => {
      count[key] = {};
      const value = `${getMappedValue(el, key)}`;
      if (count[key][value]) count[key][value]++;
      else count[key][value] = 1;
    });
  });
  return count;
}
