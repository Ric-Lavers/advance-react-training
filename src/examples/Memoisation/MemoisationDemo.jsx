import React from 'react';

import { PureComponent, FunctionalComponent } from './PureVsMemo';
const style = {
  padding: 16,
  width: 200
};
class MemoisationDemo extends React.Component {
  state = {
    count: 0
  };

  doSomething = () => {
    console.log('changing');
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    const doSomething = undefined;
    return (
      <div style={style}>
        {count}
        <PureComponent doSomething={this.doSomething} />
        <br />
        <FunctionalComponent doSomething={this.doSomething} />
        <br />
      </div>
    );
  }
}
const MemoisationDemo_ = () => {
  const doSomething = undefined;

  return (
    <div style={style}>
      {/* count */}
      <PureComponent doSomething={doSomething} />
      <br />
      <FunctionalComponent doSomething={doSomething} />
      <br />
    </div>
  );
};
/* 
let [count, setCount] = React.useState(0);
  const doSomething = React.useCallback(() => {
    console.log('changing');
    setCount(prevCount => prevCount + 1);
  }, [setCount]); */

export default MemoisationDemo;
