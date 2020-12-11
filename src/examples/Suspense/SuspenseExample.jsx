import React, { Component, Suspense } from 'react';
const TaskOne = React.lazy(() => {
  return new Promise(res => {
    setTimeout(() => {
      res();
    }, 3000);
  });
});

export default class SuspenseExample extends Component {
  state = {
    hide: false
  };
  render() {
    const { hide } = this.state;
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <button
            onClick={() => this.setState(({ hide }) => ({ hide: !hide }))}
          >
            {hide ? 'hide' : 'show'}
          </button>
          {hide ? <TaskOne /> : <div>show</div>}
        </Suspense>
      </>
    );
  }
}
