import Output from "../components/Output";
import WordInput from "../components/WordInput";
import { useState } from "react";
import { wordCloud } from "../utils/WordCloud";
import { TagCloud } from "react-tagcloud";
import WordCloudOutput from "../components/WordCloudOutput";

export default function WordCloudPage() {
  const [output, setOutput] = useState(["Your word cloud will be here"]);
  const [inputGiven, setInputGiven] = useState(false);
  return (
    <div className="w-75 h-100 bg-light overflow-auto">
      <h2 className="text-center">Word Cloud</h2>
      <WordInput
        setOutput={setOutput}
        setInputGiven={setInputGiven}
        buttonSelection="wordCloud"
      />

      <WordCloudOutput output={output} />
    </div>
  );
}
