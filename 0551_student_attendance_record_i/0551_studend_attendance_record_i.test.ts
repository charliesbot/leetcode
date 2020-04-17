import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { checkRecord } from "./0551_student_attendance_record_i.ts";

Deno.test(function checkRecordI() {
  const input = "PPALLP";
  assertEquals(checkRecord(input), true);
});

Deno.test(function checkRecord2() {
  const input = "PPALLL";
  assertEquals(checkRecord(input), false);
});
