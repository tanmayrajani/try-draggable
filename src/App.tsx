import * as React from "react";
import "./styles.css";
import Draggable from "react-draggable";

export default function App() {
  return (
    <div className="App">
      <Draggable>
        <div className="box">I can be dragged anywhere</div>
      </Draggable>
    </div>
  );
}
