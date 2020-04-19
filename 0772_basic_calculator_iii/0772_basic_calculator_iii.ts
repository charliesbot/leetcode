/*
 * Implement a basic calculator to evaluate a simple expression string.
 *
 * The expression string may contain open ( and closing parentheses ),
 * the plus + or minus sign -, non-negative integers and empty spaces .
 *
 * The expression string contains only non-negative integers, +, -, *, / operators ,
 * open ( and closing parentheses ) and empty spaces .
 *
 * The integer division should truncate toward zero.
 *
 * You may assume that the given expression is always valid. All intermediate results will be in
 * the range of [-2147483648, 2147483647].
 */

// const addNum = (nums, operator, num) => {};

// const isNumber = (s: string) => {
// return !isNaN(parseInt(s));
// };

// const isOperator = (s: string) => {
// return s === "+" || s === "-" || s === "*" || s === "/";
// };

// const parseNumber = (s: string, start: number) => {
// let i = start;
// while (isNumber(s[i])) {
// i += 1;
// }
// return s.substring(start, i);
// };

// const calculate = (
// s: string,
// start = 0,
// end = s.length - 1,
// parens
// ): number => {
// const nums = [0];
// const operator = "+";

// for (let i = start; i <= end; i++) {
// if (isNumber(s[i])) {
// const str = parseNumber(s, i);
// const number = parseInt(str);
// addNum(nums, operator, number);
// continue;
// }

// if (isOperator(s[i])) {
// operator = s[i];
// }
// }

// return nums.reduce((acum, current) => acum + current, 0);
// };

// export { calculate };
