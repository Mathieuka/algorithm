/* eslint-disable no-loop-func */
export const extractPalindrome = (str: string) => {
  if (
    str
      .split("")
      .reverse()
      .join("")
      .localeCompare(str) === 0
  )
    return true;
};

export const longestPalindrome = (s: string) => {
  let string = s.slice();
  let palindromeMaxLength = 0;
  let result = "";
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    s.split("").map((_, index) => {
      const str = string.substring(counter, index + 1);
      if (extractPalindrome(str)) {
        if (str.length > palindromeMaxLength) {
          palindromeMaxLength = str.length;
          result = str;
        }
      }
    });
    counter++;
  }
  return result;
};
