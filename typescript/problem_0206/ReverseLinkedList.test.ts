import { test, expect } from 'vitest';
import { reverseList } from './ReverseLinkedList';

test('reverseList with [1,2,3,4,5]', () => {
  const head = createLinkedList([1, 2, 3, 4, 5]);
  const reversed = reverseList(head);
  expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
});

test('reverseList with [1,2]', () => {
  const head = createLinkedList([1, 2]);
  const reversed = reverseList(head);
  expect(linkedListToArray(reversed)).toEqual([2, 1]);
});

test('reverseList with single node', () => {
  const head = createLinkedList([1]);
  const reversed = reverseList(head);
  expect(linkedListToArray(reversed)).toEqual([1]);
});

test('reverseList with empty list', () => {
  const reversed = reverseList(null);
  expect(reversed).toBeNull();
});

test('reverseList with negative numbers', () => {
  const head = createLinkedList([-1, -2, -3]);
  const reversed = reverseList(head);
  expect(linkedListToArray(reversed)).toEqual([-3, -2, -1]);
});
