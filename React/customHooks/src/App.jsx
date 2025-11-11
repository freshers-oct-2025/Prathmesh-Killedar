import "./App.css";
import useToggle from "./useToggle";

function App() {
  const [value, toggalValue] = useToggle(true);
  const [content, setContent] = useToggle(true)

  return (
    <>
      <button onClick={toggalValue}>Toggle Heading</button>
      <button onClick={() => toggalValue(false)}>Hide Heading</button>
      <button onClick={() => toggalValue(true)}>Show Heading</button>
      {value ? <h1>Custom Hooks in React</h1> : null}

      <hr />

      <button onClick={setContent}>Toggle Heading</button>
      <button onClick={() => setContent(false)}>Hide Heading</button>
      <button onClick={() => setContent(true)}>Show Heading</button>
      {content ? <h1>Custom Hooks in React</h1> : null}
    </>
  );
}

export default App;
