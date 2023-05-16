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

export function palindrome(wordList) {
  // create solutionsSet to return values
  const solutionSet = new Set();
  console.log(wordList);
  for (let i = 0; i < wordList.length; i++) {
    let reverseWord = wordList[i].split("").reverse().join("");
    if (wordList[i] == reverseWord) {
      solutionSet.add(wordList[i]);
    }
  }
  console.log(solutionSet);
  return solutionSet;
}

// console.log(palindrome(wordList));
