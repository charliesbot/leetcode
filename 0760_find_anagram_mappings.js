/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
  const hashA = {};
  const length = A.length;
  const res = [];

  for (let i = 0; i < length; i++) {
    const current = A[i];
    hashA[current] = hashA[current] || [];
    hashA[current].push(i);
  }

  for (let j = 0; j < length; j++) {
    const current = B[j];
    const indexA = hashA[current].pop();
    res[indexA] = j;
  }

  return res;
};
