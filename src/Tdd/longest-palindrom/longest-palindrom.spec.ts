import { longestPalindrome, isPalindrome } from './longest-palindrom';

describe('Should return the first longest palindrome', () => {
  test('Should return an empty string', () => {
    const arg = '';
    expect(longestPalindrome(arg)).toEqual(arg);
  });

  test('If arguments.length is equal 1 return the argument', () => {
    const arg = 'b';
    expect(longestPalindrome(arg)).toEqual(arg);
  });

  test('Should return aba', () => {
    expect(longestPalindrome('aba')).toEqual('aba');
    expect(longestPalindrome('madam')).toEqual('madam');
  });

  test('Should identify if the word is an palindrome', () => {
    expect(isPalindrome('a')).toBeTruthy();
   // expect(isPalindrome('aa')).toBeTruthy()
  });

  // test('Should return the first palindrome with the same letter', () => {
  //   expect(longestPalindrome('adddbb')).toEqual('ddd')
  // })
});
