import { TagCloud } from "react-tagcloud";

const testString = "We are what we love";

export function wordCloud(testString) {
  const lowerTestString = testString.toLowerCase();
  const wordArray = lowerTestString.split(" ");
  const data = [];
  wordArray.forEach((word) => {
    // test if word is a key in a dictionary
    for (let i = 0; i < data.length; i++) {
      // if it is, increase it's value
      if (data[i].value === word) {
        data[i].count++;
        break;
      } else {
      }
    }
    // else add it
    data.push({ value: word, count: 1 });
  });
  return data;
}
