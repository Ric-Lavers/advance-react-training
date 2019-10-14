import React from 'react';

export const OurContext = React.createContext({
  one: 1,
  two: 2
});

export const OurContextProvider = ({ children }) => {
  const [state, setState] = React.useState({
    first: 'Ric',
    last: 'Lavers',
    signUp: true
  });

  const handleChange = ({ target: { name, value, type, checked } }) => {
    value = type === 'checkbox' ? checked : value;

    setState({ ...state, [name]: value });
  };

  return (
    <OurContext.Provider value={{ state, handleChange }}>
      {children}
    </OurContext.Provider>
  );
};
