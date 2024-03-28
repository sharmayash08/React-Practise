import { useState } from "react";
const ExampleInput = () => {
  const [input, setInput] = useState("");
  const [List, setList] = useState([]);

  const handleSubmit2 = () => {
    if (input === "") return;
    setList([...List, input]);
    setInput("");
  };

  const handleSubmit = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h1>Input UseState Example</h1>

      <input type="text" onChange={handleSubmit} value={input} />
      <button onClick={handleSubmit2}>Submit</button>

      <ul>
        {List.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => setList(List.filter((_, i) => i !== index))}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleInput;
