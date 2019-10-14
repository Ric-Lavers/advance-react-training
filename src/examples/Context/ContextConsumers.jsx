import React from 'react';
import { OurContext } from './Context';

const Hooks = () => {
  const contextState = React.useContext(OurContext);

  return <pre>{JSON.stringify(contextState, null, 2)}</pre>;
};

const Consumer = () => {
  return (
    <OurContext.Consumer>
      {contextState => <pre>{JSON.stringify(contextState, null, 2)}</pre>}
    </OurContext.Consumer>
  );
};

class ContextType extends React.Component {
  static contextType = OurContext;
  render() {
    return (
      <>
        <pre>{JSON.stringify(this.context, null, 2)}</pre>
        {/* <input
          type="checkbox"
          name="signUp"
          onChange={this.context.handleChange}
        /> */}
      </>
    );
  }
}

export { Hooks, Consumer, ContextType };
