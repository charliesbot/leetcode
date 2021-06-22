/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function (A: number[], B: number[]): number[] {
  const hashA: { [key: string]: number[] } = {};
  const length = A.length;
  const res: number[] = [];

  for (let i = 0; i < length; i++) {
    const current = A[i];
    hashA[current] = hashA[current] || [];
    hashA[current].push(i);
  }

  for (let j = 0; j < length; j++) {
    const current = B[j];
    const indexA = hashA[current].pop();
    if (indexA !== undefined) {
      res[indexA] = j;
    }
  }

  return res;
};
