import Dictionary from "@/types/Dictionary";
import { getMappedValue } from "./object";

export function remove<T>(list: Array<T>, el: T) {
  const idx = list.indexOf(el);
  if (idx < 0) return;
  return list.splice(idx, 1);
}

export function maxBy<T>(list: Array<T>, key: string) {
  let max = list[0];
  let maxValue = getMappedValue<number>(max as Dictionary, key) ?? 0;
  list.forEach((el) => {
    const value = getMappedValue<number>(el as Dictionary, key) ?? 0;
    if (value > maxValue) {
      max = el;
      maxValue = value;
    }
  });
  return max;
}

export function groupBy(list: Dictionary[], key: string) {
  const group: Dictionary<Array<any>> = {};
  list.forEach((el) => {
    const value = `${getMappedValue(el, key)}`;
    if (group[value]) group[value].push(el);
    else group[value] = [el];
  });
  return group;
}

export function countBy(list: Dictionary[], key: string) {
  const count: Dictionary<number> = {};
  list.forEach((el) => {
    const value = `${getMappedValue(el, key)}`;
    if (count[value]) count[value]++;
    else count[value] = 1;
  });
  return count;
}
