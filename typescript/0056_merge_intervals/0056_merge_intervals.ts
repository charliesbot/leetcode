const merge = (intervals: number[][]) => {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const currentInterval = intervals[i];
    if (currentInterval[0] <= last[1]) {
      last[1] = Math.max(currentInterval[1], last[1]);
    } else {
      merged.push(currentInterval);
    }
  }

  return merged;
};
