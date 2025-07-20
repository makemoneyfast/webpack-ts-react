import React from "react";

export const lulz = (count: number) => {
  return "LOL!".repeat(count);
};

export const Rofl = (props: { count: number }) => (
  <h1>{"ROFL!".repeat(props.count)}</h1>
);

export function longestPalindrome(s: string): string {
  const hitsByLength = new Map<number, string>();

  // need a function to check if a given string is a palindrome.

  // Need a function that gets candidate strings

  // And then put them together
  return "wrong answer";
}
