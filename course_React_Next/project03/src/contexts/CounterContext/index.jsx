import Props from 'prop-types';
import { createContext, useContext, useState } from 'react';

export const initialState = {
  count: 0,
  loading: false,
}

const Context = createContext();

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

CounterContextProvider.propTypes = {
  children: Props.node.isRequired
}

export const useCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useCounterContext inside <CounterContextProvider />')
  }

  return [...context];
}

export default CounterContextProvider;