import "./Output.css";

export default function Output(props) {
  return (
    <div id="print">
      {props.output}
      <br />
      {props.secondVar || "default value"}
    </div>
  );
}
