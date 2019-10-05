import React from 'react';

import { fakeFetch } from './withUserDetails';

const useUserDetails = (
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

export default useUserDetails;
