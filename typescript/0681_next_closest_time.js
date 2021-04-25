/*
 * Given a time represented in the format "HH:MM",
 * form the next closest time by reusing the current digits.
 * There is no limit on how many times a digit can be reused.
 *
 * You may assume the given input string is always valid.
 * For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.
*/

var nextClosestTime = function(time) {
  let originalMinutes = time.substring(0, 2) * 60;
  originalMinutes += parseInt(time.substring(3, 5));
  let minValue = Number.MAX_SAFE_INTEGER;
  let nextTime = "";
  const set = new Set();

  for (let char of time) {
    if (char !== ":") {
      set.add(char);
    }
  }

  const list = Array.from(set);

  const dfs = acumString => {
    if (acumString.length === 4) {
      const hour = parseInt(acumString.substring(0, 2));
      const min = parseInt(acumString.substring(2));

      if (hour > 23 || min > 59) {
        return;
      }

      let newMinutes = hour * 60 + min;

      if (newMinutes <= originalMinutes) {
        newMinutes += 24 * 60;
      }

      const diff = newMinutes - originalMinutes;

      if (minValue > diff) {
        minValue = diff;
        nextTime = `${acumString.substring(0, 2)}:${acumString.substring(2)}`;
      }

      return;
    }

    for (let i = 0; i < list.length; i++) {
      acumString += list[i];
      dfs(acumString);
      acumString = acumString.substring(0, acumString.length - 1);
    }
  };

  dfs("");

  return nextTime;
};
