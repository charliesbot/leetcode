/*
 * For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)
 * Return the largest string X such that X divides str1 and X divides str2.
 */

export const gcdOfStrings = (str1: string, str2: string): string => {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  if (str1 === str2) {
    return str1;
  }

  if (str1.length > str2.length) {
    return gcdOfStrings(str1.slice(str2.length), str2);
  }

  return gcdOfStrings(str2.slice(str1.length), str1);
};
