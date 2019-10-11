import React from 'react';
import { withAuth, Auth } from './withAuth';

class HOCExample extends React.Component {
  render() {
    return (
      <>
        {/* HOC */}
        <div>Hi there, {this.props.auth.name}</div>

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
  }
}

export default withAuth(HOCExample);
