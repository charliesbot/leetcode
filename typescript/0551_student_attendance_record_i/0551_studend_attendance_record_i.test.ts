import { checkRecord } from "./0551_student_attendance_record_i";

test("checkRecordI", () => {
  const input = "PPALLP";
  expect(checkRecord(input)).toBeTruthy();
});

test("checkRecord2", () => {
  const input = "PPALLL";
  expect(checkRecord(input)).toBeFalsy();
});
