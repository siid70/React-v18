import { useState, Suspense, lazy } from "react";
// import BookList from "./components/BookList";
// import LowerState from "./components/LowerState"
import "./App.css";

const SlowComponent = lazy(() => import("./components/SlowComponent"));

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)} className="btn btn-danger">
        Toggle
      </button>
      {show && (
        <Suspense fallback={<h4>Loading ...</h4>}>
          <SlowComponent />
        </Suspense>
      )}
      {/* <LowerState />; */}
    </>
  );
};

export default App;
