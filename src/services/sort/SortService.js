/**
 * receives an array and returns a sorted array
 * @param by {string}
 * @param items {array}
 * @param asc {boolean}
 * @return {Array}
 */
export const sortBy = (by, items, asc = true) => {
  return items.sort((a, b) => {
    const first = (typeof a[by] === 'string') ? a[by].toLowerCase() : a[by]
    const second = (typeof b[by] === 'string') ? b[by].toLowerCase() : b[by]
    if (first === second) { return 0 }
    if ((typeof first === 'number' && typeof second === 'number')) {
      return sortNumber(first, second, asc)
    }
    return sortString(first, second, asc)
  })
}

/**
 * sort numbers
 * @param first
 * @param second
 * @param asc
 * @return {number}
 */
const sortNumber = (first, second, asc = true) => {
  if (!asc) {
    return (first < second) ? -1 : 1
  }
  return (first > second) ? -1 : 1
}

/**
 * sort strings
 * @param first
 * @param second
 * @param asc
 * @return {number}
 */
const sortString = (first, second, asc = true) => {
  if (!asc) {
    return (first > second) ? -1 : 1
  }
  return (first < second) ? -1 : 1
}
