import React, { useState } from 'react';

export class Input extends React.Component {
  state = {
    input: JSON.parse(localStorage.getItem('input')) || ''
  };

  componentDidMount() {
    const { input } = this.state;
    if (!input) {
      alert('are you new to hooks?');
    }
  }
  componentWillUnmount() {
    const { input } = this.state;

    localStorage.setItem('input', JSON.stringify(input));
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ input: value });
  };
  render() {
    const { input } = this.state;

    return (
      <div>
        <input onChange={this.handleChange} name="input" value={input} />
      </div>
    );
  }
}

const Input_ = () => {
  const [input, setState] = useState('');

  const handleChange = ({ target: { name, value } }) =>
    setState({ [name]: value });

  return (
    <form onChange={handleChange}>
      <input name="input" value={input} />
    </form>
  );
};

// const UseState = () => {
//   const [state, setState] = useState({ a: { b: { c: 1 } } });

//   const addOneToC = () => {
//     state.a.b.c = state.a.b.c + 1;

//     setState(state);
//   };
//   console.log('rendering ', state);
//   return (
//     <div>
//       {JSON.stringify(state, null, 2)}
//       <button onClick={addOneToC}>add one to "c"</button>
//     </div>
//   );
// };

const UseStateExample = () => {
  const [on, setOn] = React.useState(true);
  return (
    <>
      <button onClick={() => setOn(s => !s)}>click</button>
      {on ? <Input /> : <div />}
    </>
  );
};

export default UseStateExample;
