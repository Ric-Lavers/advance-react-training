import React from 'react';

const style = {
  cursor: 'pointer',
  userSelect: 'none',
  marginTop: 16,
  padding: 8,
  border: '1px solid black'
};

class PureComponent extends React.PureComponent {
  /* shouldComponentUpdate(prevProps, prevState) {
    if (prevProps.count > 3) {
      return false;
    }
    // PureComponent is just a component with a shallow props check
    for (let key in prevProps) {
      if (prevProps[key] !== this.props[key]) {
        return true;
      }
    }
    return false;
  } */

  render() {
    const { doSomething, count } = this.props;
    console.log('%c rendering PureComponent', 'color: purple');
    return (
      <div style={style} onClick={doSomething}>
        PureComponent {count}
      </div>
    );
  }
}

const FunctionalComponent = React.memo(
  ({ doSomething, count }) => {
    console.log('%c rendering FunctionalComponent', 'color: royalblue');
    return (
      <div style={style} onClick={doSomething}>
        FunctionalComponent {count}
      </div>
    );
  }
  /* (prevProps, nextProps) => {
    if (nextProps.count > 3) {
      return true;
    }
    for (let key in prevProps) {
      if (prevProps[key] !== nextProps[key]) return false;
    }
    return true;
  } */
);

export { PureComponent, FunctionalComponent };
