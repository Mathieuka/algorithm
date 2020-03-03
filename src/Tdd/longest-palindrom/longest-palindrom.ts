export const isPalindrome = (str: string) => {
  if(str.length === 1) return true;
}

export const longestPalindrome = (str: string) => {
  if (str.length === 1 || str.length === 1) return str;
  if (str.split(',').reverse().join() === str) return str;
}