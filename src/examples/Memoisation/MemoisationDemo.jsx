import React from 'react';

import { PureComponent, FunctionalComponent } from './Memoisation';

class MemoisationDemo_ extends React.Component {
  state = {
    count: 0
  };

  doSomething = () => {
    console.log('changing');
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    const doSomething = () => {
      this.setState({ count: this.state.count + 1 });
    };
    return (
      <>
        <PureComponent doSomething={this.doSomething} />
        <br />
        <FunctionalComponent doSomething={this.doSomething} />
        <br />
      </>
    );
  }
}
const MemoisationDemo = () => {
  let [count, setCount] = React.useState(0);
  const doSomething = React.useCallback(() => {
    console.log('changing');
    setCount(prevCount => prevCount + 1);
  }, [setCount]);

  return (
    <>
      {count}
      <PureComponent doSomething={doSomething} />
      <br />
      <FunctionalComponent doSomething={doSomething} />
      <br />
    </>
  );
};

export default MemoisationDemo;
