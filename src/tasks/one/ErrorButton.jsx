import React from 'react';

const ErrorButton = () => {
  const [count, setCount] = React.useState(1);

  const throwError = () => {
    throw new Error('Oopsy theres a little buggy wuggy');
  };
  // if (count === 2) {
  //   throw new Error('Oopsy theres a little buggy wuggy');
  // }
  return <button onClick={() => throwError()}>errors such as this???</button>;
};

export default ErrorButton;
