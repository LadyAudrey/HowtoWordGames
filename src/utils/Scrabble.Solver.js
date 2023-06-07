
export default function scrabbleSolver(rack) {
  const solutionsDict = {};
  const solutionsArray = [];
  // loop through words array
  for (let i = 0; i < words.length; i++) {
    // turn "rack" into an array of desiredLetters (and lower case bc of the points dict)
    const lowerString = rack.toLowerCase();
    const desiredLetters = lowerString.split("");
    const testWord = words[i].toLowerCase();
    // variable to hold scrabble points
    let pointValue = 0;
    let blanksUsed = 0;
    // loop through word to get to letter level
    for (let j = 0; j < testWord.length; j++) {
      // test if letter is in desired Letters
      if (desiredLetters.includes(testWord[j])) {
        const letter = testWord[j];
        // pointValue = pHard interview question: Word Pattern

// This is a retired 60-minute coding question from Dropbox. A good goal would be to be able to finish Part 1 within the 60 minutes, and then to come up with a plan for Part 2 even if you don’t have time to implement it fully.

// Part 1

// Write a function that takes as arguments two strings: `pattern` and `input`. Return whether or not the words in `input` match the pattern of the characters in `pattern`.

// Example 1:

// | `pattern: 'abba'`            |
// | ---------------------------- |
// | `input: 'red blue blue red'` |
// | `result: True`               |

// Example 2:

// | `pattern: 'abcabc'`                      |
// | ---------------------------------------- |
// | `Input: 'red blue green red blue green'` |
// | `result: True`                           |

// Example 3:

// | `pattern: 'abba'`             |
// | ----------------------------- |
// | `Input: 'red blue green red'` |
// | `result: False`               |
lice(desiredLetters.indexOf(testWord[i]), 1);
        // if j is last letter, than push to solutionsArray
        if (j === testWord.length - 1) {
          // solutionsDict[testWord] = pointValue;
          solutionsArray.push(testWord);
        }
      } else {
        // if it is not, then increment blanks used
        blanksUsed++;
        // if blanksUsed is > 1, then break to next word to cap blanks allowed
        if (blanksUsed > 1) {
          break;
        }
      }
    }
  }
  console.log(solutionsArray);
  return solutionsArray;
  return (
    <div>Scrabble.Solver</div>
  )
}
