import { Counter } from "./components/Counter";
import { User } from "./components/User";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";

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
      <h2 className="mt-5">UseReducer</h2>
      <hr/>
      <ContadorRed />
    </>
  );
}

export default App;
