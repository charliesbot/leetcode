import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { ladderLength } from "./0127_word_ladder.ts";

Deno.test(function test1() {
  const beginWord = "hit";
  const endWord = "cog";
  const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
  assertEquals(ladderLength(beginWord, endWord, wordList), 5);
});

