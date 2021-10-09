import { useEffect } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { useCounterContext } from "../../contexts/CounterContext";

const Home = () => {
  const [state, actions] = useCounterContext();

  return (
    <>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
      </div>
    </>
  )
}

export default Home;