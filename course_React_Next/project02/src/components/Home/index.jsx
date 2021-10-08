/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Component, useEffect, useState } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update the state so that the next rendering will show the alternative UI.

    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service.
    // console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any alternative UI
      return <p {...s}> = Something went wrong(</p>;
    }

    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('That boring!!!');
    }
  }, [counter]);

  return (
    <div>
      <button type="button" {...s} onClick={() => setCounter((s) => s + 1)}>
        increase
        {' '}
        {counter}
      </button>
    </div>
  );
};

const Home = () => (
  <div {...s}>
    <MyErrorBoundary>
      <ItWillThrowError />
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError />
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError />
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError />
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError />
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError />
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError />
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError />
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError />
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError />
    </MyErrorBoundary>
  </div>
);

export default Home;
