import React, { useState } from 'react';

const UseState = () => {
  const [state, setState] = useState({ a: { b: { c: 1 } } });

  const addOneToC = () => {
    state.a.b.c = state.a.b.c + 1;

    setState(state);
  };
  console.log('rendering ', state);
  return (
    <div>
      {JSON.stringify(state, null, 2)}
      <button onClick={addOneToC}>add one to "c"</button>
    </div>
  );
};

export default UseState;
