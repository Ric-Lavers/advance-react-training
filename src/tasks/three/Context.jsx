import React, { createContext, useState } from 'react';

export const AppContext = createContext({
  tasksTotal: 0
});

export const AppProvider = ({ children }) => {
  const [tasksTotal, setTasksTotal] = useState(0);
  const [scaleType, setScaleType] = useState('fibonacci');

  const addOne = () => {
    setTasksTotal(tasksTotal + 1);
  };

  return (
    <AppContext.Provider
      value={{
        tasksTotal,
        setTasksTotal,
        addOne,
        scaleType,
        setScaleType
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
