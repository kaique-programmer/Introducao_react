/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import {
  Children, cloneElement, createContext, useContext, useState,
} from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

const TurnOnOffContext = createContext();

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return <TurnOnOffContext.Provider value={{ isOn, onTurn }}>{children}</TurnOnOffContext.Provider>;
};

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};

const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};

const TurnButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
  return (
    <button type="button" onClick={onTurn} {...props}>
      Turn
      {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

const P = ({ children }) => <p {...s}>{children}</p>;

const Home = () => (
  <TurnOnOff>
    <div>
      <header>
        <TurnedOff>
          <P>Here are the things OFF</P>
        </TurnedOff>
      </header>
      <section>
        <TurnedOn>
          <P>Here are the things ON.</P>
        </TurnedOn>
      </section>
    </div>
    <TurnButton {...s} />
  </TurnOnOff>
);

export default Home;
