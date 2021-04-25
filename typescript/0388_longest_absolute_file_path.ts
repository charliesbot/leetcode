const lengthLongestPath = function(input: string) {
  const lines = input.split("\n");
  let max = 0;
  let pathLength = { 0: 0 };

  for (let i = 0; i < lines.length; i++) {
    const name = lines[i].replace(/\t/g, "");
    const depth = lines[i].length - name.length;

    if (name.includes(".")) {
      max = Math.max(max, pathLength[depth] + name.length);
    } else {
      // plus one because is the name and /
      pathLength[depth + 1] = pathLength[depth] + name.length + 1;
    }
  }

  return max;
};

lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext");
