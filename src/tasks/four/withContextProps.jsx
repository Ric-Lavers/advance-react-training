import React from 'react';

import { AppContext } from './Context_4';

/**
 * extracts the required props from context and passes through to the component
 * when using React.memo or PureComponent this will only render when the state context updates match the requestedFields
 *
 * @param {React Component} Component
 * @param {array} options
 */
const withContextProps = (
  Component,
  requestedFields = [],
  Context = AppContext
) => props => {
  const appContext = useContext(Context);
  let contextProps = {};
  requestedFields.forEach(p => {
    if (appContext[p]) {
      contextProps[p] = appContext[p];
    }
  });

  return <Component {...contextProps} {...props} />;
};

export default withContextProps;
