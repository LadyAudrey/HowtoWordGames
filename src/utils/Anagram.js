export function anagram(wordsArray, rack) {
  const rackUpperCaseArray = rack.toUpperCase().split("");
  const rackMap = {};
  const solutionsArray = [];

  // make rack into a dictionary with letters as strings and times repeated as values
  rackUpperCaseArray.forEach((letter) => {
    if (letter in rackMap) {
      rackMap[letter]++;
    } else {
      rackMap[letter] = 1;
    }
  });
  // get to the letter level in each word of possibleWordsArray
  for (let i = 0; i < wordsArray.length; i++) {
    const testWord = wordsArray[i];
    if (testWord === rack.toUpperCase() || testWord.length !== rack.length) {
      continue;
    }
    const testWordDict = {};
    for (let j = 0; j < testWord.length; j++) {
      const testLetter = testWord[j];
      // add to test word Dict as appropriate
      if (rackUpperCaseArray.includes(testLetter)) {
        if (testLetter in testWordDict) {
          testWordDict[testLetter]++;
        } else {
          testWordDict[testLetter] = 1;
        }
      } else {
        // console.log(testWord);
        // console.log(testWordDict);
        // break;
      }
    }
    // test if dicts are similar
    if (compareDictionaries(testWordDict, rackMap)) {
      solutionsArray.push(testWord);
    }
  }
  console.log(solutionsArray.length, solutionsArray);
  return solutionsArray.length === 0
    ? ["Sorry, there are no anagrams for that word"]
    : solutionsArray;
}

console.log(
  anagram(
    [
      "LOOP",
      "LOPE",
      "LOPS",
      "OLPE",
      "PLOD",
      "PLOT",
      "PLOW",
      "PLOY",
      "POLE",
      "POLK",
      "POLL",
      "POLO",
      "POLS",
      "POLT",
      "POLY",
      "POOL",
    ],
    "POOL"
  )
);

function compareDictionaries(dict1, dict2) {
  const keys1 = Object.keys(dict1);
  const keys2 = Object.keys(dict2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if ((key, dict1[key] !== dict2[key])) {
      return false;
    }
  }

  return true;
}

// export function anagram(wordsArray, rack) {
//   const desiredLetters = rack.toUpperCase();
//   // create solutionsDict
//   const solutionsArray = [];
//   // loop through wordsArray array
//   for (let i = 0; i < wordsArray.length; i++) {
//     // boolean to break if it turns to false
//     let isDesiredLetter = true;
//     // turn "rack" into an array of desiredLetters (and lower case bc of the points dict)
//     const testWord = wordsArray[i];
//     // loop through word to get to letter level
//     for (let j = 0; j < testWord.length; j++) {
//       // create test array
//       // test if letter is in desired Letters
//       if (desiredLetters.includes(testWord[j])) {
//       } else {
//         isDesiredLetter = false;
//       }
//       if (isDesiredLetter === false) {
//         break;
//       }
//     }
//     if (isDesiredLetter === true) {
//       solutionsArray.push(testWord);
//     }
//   }
//   return solutionsArray.length === 0
//     ? ["Sorry, there are no anagrams for that word"]
//     : solutionsArray;
// }

// console.log(anagram(testingArray, "cat"));
// map implementation- we want it to return an array of strings
