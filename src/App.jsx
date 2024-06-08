import "./App.css";
import Tooltip from "./Tooltip";

function App() {
  return (
    <>
      <Tooltip text="Tooltip on the left" position="left">
        <button>Hover me (left)</button>
      </Tooltip>
      <Tooltip text="Tooltip on the right" position="right">
        <button>Hover me (right)</button>
      </Tooltip>
      <Tooltip text="Tooltip on the top" position="top">
        <button>Hover me (top)</button>
      </Tooltip>
      <Tooltip text="Tooltip on the bottom" position="bottom">
        <button>Hover me (bottom)</button>
      </Tooltip>
    </>
  );
}

export default App;
