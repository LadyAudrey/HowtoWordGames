// code for contains letters button onclick function

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

// Part of the React-ivity; exporting upon onClick
export function containsLetters(list, letters) {
  // creating a solutionSet
  const solutionSet = new Set();
  // create an array from argument string
  const desiredLetters = letters.split("");
  // looping through array
  wordList.forEach((word) => {
    // boolean logic variable
    let isDesired = true;
    // loop through word, with ability to break
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      // test if desiredLetters does not include letter, and if so break
      if (!desiredLetters.includes(letter)) {
        isDesired = false;
        break;
      }
    }
    if (isDesired === true) {
      solutionSet.add(word);
    }
  });
  console.log(solutionSet);
  return solutionSet;
}

// case example of calling above function
// console.log(containsLetters(wordList, "ABEL"));
