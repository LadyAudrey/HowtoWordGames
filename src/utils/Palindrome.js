export function palindrome(string) {
  // create solutionsSet to return values
  let reverseString = string.toUpperCase().split("").reverse().join("");
  if (string.toUpperCase() === reverseString) {
    return `${string} is a palindrome`;
  }
  return `${string} is not a palindrome`;
}

