import { test, expect } from 'vitest';
import { numIslands } from './NumberOfIslands';
import { numIslandsBFS } from './NumberOfIslandsBFS';

test('numberOfIslandsDFS1', () => {
  const input = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ];
  expect(numIslands(input)).toBe(1);
});

test('numberOfIslandsDFS2', () => {
  const input = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ];
  expect(numIslands(input)).toBe(3);
});

test('numberOfIslandsBFS1', () => {
  const input = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ];
  expect(numIslandsBFS(input)).toBe(1);
});

test('numberOfIslandsBFS2', () => {
  const input = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ];
  expect(numIslandsBFS(input)).toBe(3);
});
