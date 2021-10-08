/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import { Children, cloneElement, useState } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });
    return newChild;
  });
};

const TurnedOn = ({ isOn, children }) => (isOn ? children : null);

const TurnedOff = ({ isOn, children }) => (isOn ? null : children);

const TurnButton = ({ isOn, onTurn, ...props }) => (
  <button type="button" onClick={onTurn} {...props}>
    Turn
    {isOn ? 'ON' : 'OFF'}
  </button>
);

const P = ({ children }) => <p {...s}>{children}</p>;

const Home = () => (
  <TurnOnOff>
    <TurnedOn>
      <P>Here are the things ON.</P>
    </TurnedOn>
    <TurnedOff>
      <P>Here are the things OFF</P>
    </TurnedOff>
    <TurnButton {...s} />
  </TurnOnOff>
);

export default Home;
