/*
 * Given an array of meeting time intervals consisting of
 * start and end times [[s1,e1],[s2,e2],...] (si < ei),
 * find the minimum number of conference rooms required.
 */

const minMeetingRooms = function(intervals) {
  const start = [];
  const end = [];

  for (let i = 0; i < intervals.length; i++) {
    start.push(intervals[i].start);
    end.push(intervals[i].end);
  }

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let endIndex = 0;
  let rooms = 0;

  for (let i = 0; i < start.length; i++) {
    if (start[i] < end[endIndex]) {
      rooms++;
    } else {
      endIndex++;
    }
  }

  return rooms;
};

// const times = [{ start: 13, end: 15 }, { start: 1, end: 13 }];
const times = [
  { start: 0, end: 30 },
  { start: 5, end: 10 },
  { start: 15, end: 20 }
];

console.log(minMeetingRooms(times));
