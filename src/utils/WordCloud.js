// import { render } from "react-dom";
// import WordCloud from "react-d3-cloud";

const testString = "We are what we love";

export function wordCloud(testString) {
  const lowerTestString = testString.toLowerCase();
  const wordArray = lowerTestString.split(" ");
  const data = [{}];
  wordArray.forEach((word) => {
    if (word in data) {
      data[word]++;
    } else {
      data[word] = 1;
    }
  });
  console.log(data);
  return data;
}

// const data = [
//     { text: 'Hey', value: 1000 },
//     { text: 'lol', value: 200 },
//     { text: 'first impression', value: 800 },
//     { text: 'very cool', value: 1000000 },
//     { text: 'duck', value: 10 },
//   ];

//   render(<WordCloud data={data} />, document.getElementById('root'));
// // export function findOccurencesOfWords (string){
// //     return(Map)
// // }
