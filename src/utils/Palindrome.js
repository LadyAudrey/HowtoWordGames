const wordList = [
  "AARDWOLVES",
  "ABEL",
  "AARGH",
  "ACT",
  "BALE",
  "BOOK",
  "BOOKKEEPER",
  "BRR",
  "KAYAK",
  "NOON",
  "ROTATOR",
];

export function palindrome(string) {
  // create solutionsSet to return values
  let reverseString = string.split("").reverse().join("");
  if (string === reverseString) {
    return "true";
  }
  return "false";
}

// console.log(palindrome(wordList));
