/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
  const cloneArr = [...arr];
  if (param === 'desc') {
    return cloneArr.sort((a, b) => {
      return b.localeCompare(a, ['ru', 'en'], {caseFirst: 'upper'});
    });
  }
  if (param === 'asc') {
    cloneArr.sort((a, b) => {
      return a.localeCompare(b, 'kf', {caseFirst: 'upper'});
    });
  }
  return cloneArr;
}
