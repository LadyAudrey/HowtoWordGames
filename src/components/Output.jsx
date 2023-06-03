import "./Output.css";
import { Table } from "react-bootstrap";

export default function Output(props) {
  const { output } = props;
  console.log("output ", output[0]);
  return (
    <div
      id="print"
      className="bg-success m-auto p-3 rounded-5 border border-5 border-info"
    >
      {output.map((value, index) => {
        return (
          <div key={`output-key-${index}`} className="px-3">
            {value}
          </div>
        );
      })}
    </div>
  );
}
