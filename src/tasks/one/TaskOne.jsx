import React from 'react';
import ErrorButton from './ErrorButton';

const MySection = ({ title, description, children }) => {
  return (
    <section className="task-one__section">
      <h2>{title}</h2>
      <p>{description}</p>

      {children}
    </section>
  );
};

export default class TaskOne extends React.Component {
  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    console.log(err, info);
  }

  state = {
    hasError: false
  };

  render() {
    if (this.state.hasError) {
      return <div>oh no a error occured</div>;
    }
    return React.createElement(
      MySection,
      {
        title: 'Task one ',
        description: 'refactor this code to use Error Boundaries and NO JSX'
      },
      React.createElement(
        'details',
        {},
        React.createElement('summary', {}, 'Fragments'),
        React.createElement(
          'p',
          {},
          'Let you group a list of children without adding extra nodes to the DOM'
        )
      ),
      React.createElement(
        'details',
        {},
        React.createElement('summary', {}, 'Error boundaries'),
        React.createElement(
          'p',
          {},
          'Protects your app by catching errors allowing you to render fallback UI or perform side effet such as logging.',
          React.createElement(ErrorButton)
        )
      ),
      React.createElement(
        'details',
        {},
        React.createElement('summary', {}, 'JSX'),
        React.createElement(
          'p',
          {},
          'Let you write React.js with the look and feel of HTML'
        )
      )
    );
  }
}
