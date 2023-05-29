const testingArray = [
  "AARDWOLVES",
  "AARGH",
  "ACT",
  "ANTENNIFEROUS",
  "BOOK",
  "BOOKKEEPER",
  "BRR",
  "CAT",
  "CUESTAS",
  "CUFF",
  "FEEDBACK",
  "FIDDI",
  "KEEPER",
  "LUNISOLAR",
  "LUNITIDAL",
  "LUNK",
  "MAN",
  "POLYPTYCHS",
  "POLYPUS",
  "POLYPUSES",
  "POLYRHYTHM",
  "POLYRHYTHMIC",
  "PROGRAM",
  "PROGRESS",
  "PROLIFIC",
  "REFERRER",
  "REST",
  "SNOW",
  "SNOWMAN",
  "SUPERORDINARY",
  "TAC",
  "TOKTOKKIE",
  "TOKTOKKIES",
  "TOLA",
  "TOLAN",
  "TSKTSK",
  "UU",
  "VACUUM",
  "BOOKKEEPER",
];

export function anagram(wordsArray, rack) {
  const desiredLetters = rack.toUpperCase();
  // create solutionsDict
  const solutionsArray = [];
  // loop through wordsArray array
  for (let i = 0; i < wordsArray.length; i++) {
    // boolean to break if it turns to false
    let isDesiredLetter = true;
    // turn "rack" into an array of desiredLetters (and lower case bc of the points dict)
    const testWord = wordsArray[i];
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
  return solutionsArray.length === 0
    ? ["Sorry, that's not an anagram"]
    : solutionsArray;
}

console.log(anagram(testingArray, "cat"));
// map implementation- we want it to return an array of strings
