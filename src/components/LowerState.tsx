import { useMemo, useState } from "react";
import List from "./List";
import books from "../books";
import slowFunction from "../slowFunction";

const LowerState = () => {
  const [count, setCount] = useState(0);

  const value = useMemo(() => slowFunction(), []);
  console.log(value);

  return (
    <>
      <button
        className="btn btn-primary"
        style={{ margin: "1rem", padding: "1rem" }}
        onClick={() => setCount(count + 1)}
      >
        Count {count}
      </button>
      <List books={books} />
    </>
  );
};

export default LowerState;
