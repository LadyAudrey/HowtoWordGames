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

export function anagram(wordsArray, rack) {
  const desiredLetters = rack.split("");
  // create solutionsDict
  const solutionsArray = [];
  // loop through wordList array
  for (let i = 0; i < wordList.length; i++) {
    // boolean to break if it turns to false
    let isDesiredLetter = true;
    // turn "rack" into an array of desiredLetters (and lower case bc of the points dict)
    const testWord = wordList[i];
    // loop through word to get to letter level
    for (let j = 0; j < testWord.length; j++) {
      // test if letter is in desired Letters
      if (desiredLetters.includes(testWord[j])) {
      } else {
        isDesiredLetter = false;
      }
      if (isDesiredLetter === false) {
        break;
      }
    }
    if (isDesiredLetter === true) {
      solutionsArray.push(testWord);
    }
  }
  return solutionsArray;
}

// anagram("BALE");
