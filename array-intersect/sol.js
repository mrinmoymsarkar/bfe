//https://bigfrontend.dev/problem/array-intersect






/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
function getIntersection(arr1, arr2) {
  // your code here
  let a = new Set(arr1);
  let b = new Set(arr2);
  return [...a].filter(a => b.has(a));
}




