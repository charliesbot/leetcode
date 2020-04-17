const licenseKeyFormatting = function(S: string, K: number) {
  const string = S.replace(/-/g, "");
  let result = "";
  let counter = 0;

  for (let i = string.length - 1; i >= 0; i--) {
    result = string[i] + result;
    counter++;
    if (counter === K && i > 0) {
      result = "-" + result;
      counter = 0;
    }
  }

  return result.toUpperCase();
};

licenseKeyFormatting("5F3Z-2e-9-w", 4);
licenseKeyFormatting("2-5g-3-J", 2);
