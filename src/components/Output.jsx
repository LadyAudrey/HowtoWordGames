import "./Output.css";
import { Table } from "react-bootstrap";

export default function Output(props) {
  const { output } = props;
  return (
    <div className="border border-5 rounded-3 m-1">
      <div id="print" className="bg-success p-3">
        {output.map((value, index) => {
          return (
            <div key={`output-key-${index}`} className="px-3">
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
