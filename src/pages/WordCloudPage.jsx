import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { wordCloud } from "../utils/WordCloud";
import { TagCloud } from "react-tagcloud";

export default function WordCloudPage() {
  const [output, setOutput] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const sample = wordCloud(
  //   "A literary paragraph is a paragraph about literature. Usually a literary paragraph is written in response to questions or instructions such as: What is the theme in this story? How did the main character's actions influence the outcome of the story? Describe the changes that a character went through."
  // );
  // console.log(sample);
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    setOutput(wordCloud(inputValue));
  }
  return (
    <div className="w-75 h-100 bg-light overflow-auto px-5 text-center">
      <h2 className="text-center">Word Cloud</h2>
      <Form.Control
        as="textarea"
        value={inputValue}
        rows={5}
        onChange={handleChange}
        placeholder="sample"
        className="p-3 ms-3"
      />
      <Button variant="primary" className="my-4 m-auto" onClick={handleSubmit}>
        Let's Play
      </Button>
      <div className="border border-5 rounded-3 m-5 p-3 bg-success">
        <TagCloud tags={output} minSize={12} maxSize={99} />
      </div>
    </div>
  );
}
