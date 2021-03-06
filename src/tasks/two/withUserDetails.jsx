import React from "react";
import { getUserData } from "./userData";
/**
 * This HOC will fetch the userDetails from local storage if it is not present or lastLogin is more than a hour ago,
 *
 * @param {*} WrappedComponent
 * @param {*} options
 */
function withUserDetails(WrappedComponent, options = {}) {
  return class extends React.Component {
    state = {
      userDetails: JSON.parse(localStorage.getItem("userDetails")),
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
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }

    getUserDetails = async () => {
      let userDetails = await getUserData();
      userDetails.lastLogin = Date.now();
      this.setState({
        userDetails,
        isLoading: false
      });
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    };

    render() {
      const { userDetails, isLoading } = this.state;

      return isLoading ? (
        <p>...isLoading</p>
      ) : (
        <WrappedComponent details={userDetails} {...this.props} />
      );
    }
  };
}

export default withUserDetails;
