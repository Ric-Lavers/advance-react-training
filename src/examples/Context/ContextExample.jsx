import React from 'react';

import { OurContextProvider } from './Context';
import { Hooks, Consumer, ContextType } from './ContextConsumers';

const ContextExample = () => {
  return (
    <>
      <Hooks />
      <Consumer />
      <ContextType />
    </>
  );
};

export default ContextExample;
