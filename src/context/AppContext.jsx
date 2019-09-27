import React, { createContext, useState } from 'react';

export const AppContext = createContext({
  tasksTotal: localStorage.tasksTotal ? localStorage.tasksTotal : 0
});

export const AppProvider = ({ children }) => {
  const [tasksTotal, setTasksTotal] = useState(0);

  const addToTotal = amount => {
    setTasksTotal(parseInt(tasksTotal) - amount);
  };

  return (
    <AppContext.Provider
      value={{
        tasksTotal,
        setTasksTotal,
        addToTotal
      }}
    >
      <>
        {String(tasksTotal)}
        {children}
      </>
    </AppContext.Provider>
  );
};
