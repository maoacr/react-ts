import { Counter } from "./components/Counter";
import { User } from "./components/User";

import { TimerPadre } from "./components/TimerPadre";

function App() {
  return (
    <>
      <h1>React + TypeScript !</h1>
      <h2 className="mt-5">UseState</h2>
      <hr/>
      <Counter />
      <User />

      <h2 className="mt-5">UseEffect - useRef</h2>
      <hr/>

      <TimerPadre />
    </>
  );
}

export default App;
