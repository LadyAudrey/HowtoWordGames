import "./Output.css";

export default function Output(props) {
  const { output } = props;
  console.log("output ", output[0]);
  return (
    <div id="print">
      {output.map((value, index) => {
        return <div key={`output-key-${index}`}>{value}</div>;
      })}
    </div>
  );
}
