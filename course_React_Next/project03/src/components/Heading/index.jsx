import Props from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

const Heading = ({ children }) => {
  const [state, actions] = useCounterContext();

  return (
    <>
      <h1 style={{ fontSize: '50px' }}>
        {state.counter}
      </h1>
    </>
  );
}

export default Heading;
