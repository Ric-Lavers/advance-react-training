import React from 'react';

import './App.scss';
import TaskOne from './tasks/one/TaskOne';
import NavBar from './components/NavBar';
import ToDoContainer from './components/ToDo/ToDoContainer';
import withUserDetails, {
  useUserDetails
} from './examples/HigherOrderComponent/withUserDetails';
import UseState from './examples/useState/UseState';
window['React'] = React;

const UserDetails = props => {
  const { userDetails } = props;

  return userDetails ? (
    <table>
      <tbody>
        {Object.keys(userDetails).map(k => (
          <tr key={k}>
            <td>{k}</td>
            <td>{userDetails[k]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>...loading</p>
  );
};

const WrapperUserDetails = withUserDetails(UserDetails);

const Hooks = () => {
  const { userDetails, isLoading } = useUserDetails();

  return isLoading ? (
    <p>...isLoading</p>
  ) : (
    <UserDetails userDetails={userDetails} />
  );
};

class App extends React.Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>Oopsie whoopsie there's seems to be a little buggy wuggy!</p>;
    }

    return <TaskOne />;
    // return <UseState />;
    // hoc
    return (
      <>
        <Hooks />
        <WrapperUserDetails />
      </>
    );
    // To do App

    return (
      <div className="App">
        <NavBar />
        <section>
          <ToDoContainer />
        </section>
      </div>
    );
  }
}

export default App;
