import React from 'react';

const demoUserDetails = {
  name: 'Ric',
  level: 'consultant',
  role: 'FED',
  team: 'Channels',
  SBU: 'Digital',
  company: 'Deloitte',
  lastLogin: ''
};

const fakeFetch = () => {
  return new Promise(res => {
    setTimeout(() => res(demoUserDetails), 1500);
  });
};
window['x'] = 5;
export const useUserDetails = (
  initalUserDetails = JSON.parse(localStorage.getItem('userDetails')) || {}
) => {
  const [userDetails, setUserDetails] = React.useState(initalUserDetails);
  const [isLoading, setLoading] = React.useState(true);
  const shouldRefetch = React.useCallback(
    userDetails.lastLogin < Date.now() - 60 * 60 * 1000,
    [userDetails.lastLogin]
  );

  const getUserDetails = () => {
    fakeFetch().then(userDetails => {
      userDetails.lastLogin = Date.now();
      setUserDetails(userDetails);
      setLoading(false);
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    });
    return () => {
      userDetails.lastLogin = Date.now();
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    };
  };

  React.useEffect(getUserDetails, [userDetails, shouldRefetch]);
  return {
    isLoading,
    userDetails
  };
};

/**
 * This HOC will fetch the userDetails from local storage if it is not present or lastLogin is more than a hour ago,
 *
 * @param {*} WrappedComponent
 * @param {*} options
 */
function withUserDetails(WrappedComponent, options = {}) {
  return class extends React.Component {
    state = {
      userDetails: JSON.parse(localStorage.getItem('userDesstails')),
      isLoading: true
    };

    componentDidMount() {
      this.getUserDetails();
    }

    componentDidUpdate() {
      const { userDetails } = this.state;
      if (userDetails && userDetails.lastLogin < Date.now() - 60 * 60 * 1000) {
        this.getUserDetails();
      }
    }

    componentWillUnmount() {
      const { userDetails } = this.state;
      userDetails.lastLogin = Date.now();
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }

    getUserDetails = async () => {
      let userDetails = await fakeFetch();
      userDetails.lastLogin = Date.now();
      this.setState({
        userDetails,
        isLoading: false
      });
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    };

    render() {
      const { userDetails, isLoading } = this.state;

      return isLoading ? (
        <p>...isLoading</p>
      ) : (
        <WrappedComponent userDetails={userDetails} {...this.props} />
      );
    }
  };
}

export default withUserDetails;
