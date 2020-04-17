/*
  You are given a string representing an attendance record for a student. The record only contains the following three characters:
    'A' : Absent.
    'L' : Late.
    'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.
*/

export const checkRecord = (s: string) => {
  let aCounter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      aCounter++;
    }

    const lCheck = s[i] === "L" && s[i] === s[i - 1] && s[i] === s[i - 2];

    if (aCounter > 1 || lCheck) {
      return false;
    }
  }

  return true;
};
