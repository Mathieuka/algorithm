import { longestPalindrome } from './longest-palindrom';

describe('Should return the first longest palindrome', () => {
  test('Should return an empty string', () => {
    const arg = '';
    expect(longestPalindrome(arg)).toEqual(arg);
  });

  test('If arguments.length is equal 1 return the argument', () => {
    const arg = 'b';
    expect(longestPalindrome(arg)).toEqual(arg);
  });

  test('Should return the same str', () => {
    expect(longestPalindrome('aba')).toEqual('aba');
    expect(longestPalindrome('madam')).toEqual('madam');
    expect(longestPalindrome('abababa')).toEqual('abababa');
  });

  test('Should return the first palindrome with the same letter', () => {
    expect(longestPalindrome('aabb')).toEqual('aa');
    expect(longestPalindrome('aaabb')).toEqual('aaa');
    expect(longestPalindrome('bbaaa')).toEqual('aaa');
    expect(longestPalindrome('bbaaadddd')).toEqual('dddd');
    expect(longestPalindrome('ttaaftffftfaafatfz')).toEqual('aaftffftfaa');
  })
});


