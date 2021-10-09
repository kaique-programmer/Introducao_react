import { useEffect } from "react";
import { useCounterContext } from "../../contexts/CounterContext";

const Home = () => {
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.increase();
  }, []);

  return (
    <div>
      <h1 onClick={() => actions.increase()}>increase</h1>
    </div>
  )
}

export default Home;