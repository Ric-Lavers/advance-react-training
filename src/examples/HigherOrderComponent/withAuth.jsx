import React, { useState } from 'react';
import { authProvider } from './authProvider';

function withAuth(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent auth={authProvider} {...this.props} />;
    }
  };
}

class Auth extends React.Component {
  render() {
    const { render } = this.props;
    return render
      ? this.props.render({ auth: authProvider })
      : this.props.children({ auth: authProvider });
  }
}

const useAuth = () => {
  const [auth, setAuth] = useState(authProvider);

  return { auth };
};

const ComponentA = ({ auth }) => {
  return <div> Hi, {auth.name}</div>;
};

export { withAuth, Auth };
