import { Activity, useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [count, setCount] = useState<"one" | "two" | "three">("two");

  return (
    <>
      <p>
        👉 Click on the buttons to activate another "tab" and see what the
        browser title looks like
      </p>

      <button
        className={count === "one" ? "active" : undefined}
        onClick={() => setCount("one")}
      >
        One
      </button>
      <button
        className={count === "two" ? "active" : undefined}
        onClick={() => setCount("two")}
      >
        Two
      </button>
      <button
        className={count === "three" ? "active" : undefined}
        onClick={() => setCount("three")}
      >
        Three
      </button>

      <Activity mode={count === "one" ? "visible" : "hidden"}>
        <One isVisible={count === "one"} />
      </Activity>
      <Activity mode={count === "two" ? "visible" : "hidden"}>
        <Two isVisible={count === "two"} />
      </Activity>
      <Activity mode={count === "three" ? "visible" : "hidden"}>
        <Three isVisible={count === "three"} />
      </Activity>
    </>
  );
}

function One({ isVisible }: { isVisible: boolean }) {
  useEffect(() => {
    if (isVisible) {
      document.title = "One";
    }
  }, [isVisible]);

  return <div>One</div>;
}

function Two({ isVisible }: { isVisible: boolean }) {
  useEffect(() => {
    if (isVisible) {
      document.title = "Two";
    }
  }, [isVisible]);

  return <div>Two</div>;
}

function Three({ isVisible }: { isVisible: boolean }) {
  useEffect(() => {
    if (isVisible) {
      document.title = "Three";
    }
  }, [isVisible]);

  return <div>Three</div>;
}
