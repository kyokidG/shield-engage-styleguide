/**
 * Get all parents by item.
 *
 * @param arr Adjacency items.
 * @param key Item key.
 * @param acc Parents accumulator.
 */
export function parents (arr: Array<any>, key: string | undefined, acc: Array<any> = []): Array<any> {
  if (key === undefined) {
    return acc
  }
  const parent = arr.find(el => el.key === key)
  return parents(arr, parent.parent, [...acc, parent])
}
