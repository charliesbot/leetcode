const topKFrequent = (nums: number[], k: number) => {
  const hash = {};
  const result = [];
  let bucket: number[][] = new Array();

  nums.forEach(n => {
    hash[n] = hash[n] || 0;
    hash[n]++;
  });

  for (let num in hash) {
    bucket[hash[num]] = bucket[hash[num]] || [];
    bucket[hash[num]].push(parseInt(num));
  }

  bucket = bucket.filter(b => b);

  for (let i = bucket.length - 1; i >= 0 && k > 0; k--) {
    result.push(bucket[i].pop());
    if (bucket[i].length === 0) {
      i--;
    }
  }

  return result;
};
