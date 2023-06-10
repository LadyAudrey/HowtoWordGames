const testArray = [
  "OVE",
  "LO",
  "OVE",
  "STAY",
  "REST",
  "NEST",
  "PROFILE",
  "ABCDEFGHIJ",
  "ANGULAR",
  "PROGRAMING",
];

export default function scrabbleSolver(wordsArray, rack) {
  const rackUpperCaseArray = rack.toUpperCase().split("");
  // create rackDict
  const rackDict = {};
  rackUpperCaseArray.forEach((letter) => {
    if (letter in rackDict) {
      rackDict[letter]++;
    } else {
      rackDict[letter] = 1;
    }
  });
  const solutionsArray = [];
  // loop through words array
  for (let i = 0; i < wordsArray.length; i++) {
    // turn "rack" into an array of desiredLetters
    const desiredLettersArray = rack.toUpperCase().split("");
    const testWordString = wordsArray[i].toUpperCase();
    // create testDict
    const testDict = {};
    // loop through word to get to letter level
    for (let j = 0; j < testWordString.length; j++) {
      const testLetter = testWordString[j];
      // test if letter is in desiredLettersArray
      if (desiredLettersArray.includes(testLetter)) {
        // if it is, add to testDict as appropriate
        if (testLetter in testDict) {
          testDict[testLetter]++;
        } else {
          testDict[testLetter] = 1;
        }
      } else {
        break;
      }
      if (j === testWordString.length - 1) {
        // test if testDict letter counts are <= to rackDict's
        if (compareDictionaries(testDict, rackDict)) {
          solutionsArray.push(testWordString);
        }
      }
    }
  }
  return solutionsArray;
}

console.log(scrabbleSolver(testArray, "loveL"));

function compareDictionaries(dict1, dict2) {
  const keys1 = Object.keys(dict1);
  const keys2 = Object.keys(dict2);

  if (keys1.length > keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if ((key, dict1[key] > dict2[key])) {
      return false;
    }
  }

  return true;
}
