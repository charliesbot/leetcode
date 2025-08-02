import { test, expect } from 'vitest';
import { checkRecord } from './StudentAttendanceRecordI';

test('checkRecordI', () => {
  const input = 'PPALLP';
  expect(checkRecord(input)).toBeTruthy();
});

test('checkRecord2', () => {
  const input = 'PPALLL';
  expect(checkRecord(input)).toBeFalsy();
});
