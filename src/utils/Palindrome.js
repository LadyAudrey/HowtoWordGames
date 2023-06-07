export function palindrome(string) {
  // create solutionsSet to return values
  let reverseString = string.split("").reverse().join("");
  if (string === reverseString) {
    return "true";
  }
  return "false";
}