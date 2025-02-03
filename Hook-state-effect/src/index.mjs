import MyReact from "./MyReact.mjs";
import { useState, useEffect } from "./useState.mjs";

function FunctionalComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("foo");

  useEffect(() => {
    console.log("effect", count, text);
    return () => {
      console.log("cleanup", count, text);
    };
  }, [count, text]);

  return {
    click: () => setCount((prev) => prev + 1),
    type: (text) => setText(text),
    noop: () => setCount(count),
    render: () => {
      console.log("render", { count, text });
    },
  };
}

let App = MyReact.render(FunctionalComponent);

App.click();
App = MyReact.render(FunctionalComponent);

App.type("bar");
App = MyReact.render(FunctionalComponent);

App.noop();
App = MyReact.render(ExampleComponent);

App.click();
App = MyReact.render(ExampleComponent);
