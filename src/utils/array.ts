export function remove<T>(list:Array<T>, el:T) {
    const idx = list.indexOf(el);
    if (idx < 0) return;
    return list.splice(idx, 1);
}