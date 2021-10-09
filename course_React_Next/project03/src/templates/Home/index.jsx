import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { useCounterContext } from "../../contexts/CounterContext";

const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  }

  return (
    <>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>Decrease</Button>
        <Button onButtonClick={actions.reset}>Reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>Set 10</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>Set 100</Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>Async increase</Button>
        <Button disabled={state.loading} onButtonClick={handleError}>Async error</Button>
      </div>
    </>
  )
}

export default Home;