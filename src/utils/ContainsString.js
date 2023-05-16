const wordList = [
  "AARDWOLVES",
  "ABEL",
  "AARGH",
  "ACT",
  "BALE",
  "BOOK",
  "BOOKKEEPER",
  "BRR",
];

export function containsString(wordList, string) {
  // creating solutionArray; needs to be here to reset for onclick
  const solutionArray = [];
  const subStringUpper = string.toUpperCase();
  // console.log(wordList);
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i].includes(subStringUpper)) {
      solutionArray.push(wordList[i]);
    }
  }
  return solutionArray;
}

// console.log(containsString(wordList, "oO"));
