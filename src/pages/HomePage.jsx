import { useEffect } from "react";

export default function HomePage(props) {
  useEffect(() => {
    if (props.text.length < 1) {
      fetch("sowpods.txt")
        .then((r) => r.text())
        .then((text) => {
          props.setText(text.split("\n"));
        });
    }
  }, []);
  return (
    <div className="h-100 w-75 bg-light">
      <h2 className="text-center">Select an option to the left</h2>
    </div>
  );
}
