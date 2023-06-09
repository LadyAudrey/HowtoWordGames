import { TagCloud } from "react-tagcloud";

const testString = "We are what we love";

export function wordCloud(testString) {
  const wordArray = testString
    .replaceAll("?", "")
    .replaceAll(".", "")
    .replaceAll(",", "")
    .replaceAll(":", "")
    .replaceAll(";", "")
    .toLowerCase()
    .split(" ");
  const data = new Map();
  wordArray.forEach((word) => {
    if (data.has(word)) {
      data.set(word, data.get(word) + 1);
    } else {
      data.set(word, 1);
    }
  });
  // wordArray.forEach((word) => {
  //   // test if word is a key in a dictionary
  //   for (let i = 0; i < data.length; i++) {
  //     // if it is, increase it's value
  //     if (data[word].value === word) {
  //       data[word].count++;
  //       break;
  //     } else {
  //     }
  //   }
  //   // else add it
  //   data.push({ value: word, count: 1 });
  // });
  return Array.from(data).map((result) => {
    return {
      value: result[0],
      count: result[1],
    };
  });
}
