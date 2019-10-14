import React from 'react';
import { withAuth, Auth, useAuth } from './withAuth';

const HOCExample = props => {
  const { auth } = useAuth();

  return (
    <>
      {/* Hooks */}
      <div>Hi there, {auth.name}</div>

      {/* HOC */}
      <div>Hi there, {props.auth.name}</div>

      {/* render props */}
      <Auth render={({ auth }) => <div>Hi there, {auth.name}</div>} />

      {/* props as children */}
      <Auth>
        {({ auth }) => {
          return <div>Hi there, {auth.name}</div>;
        }}
      </Auth>
    </>
  );
};

export default withAuth(HOCExample);
