import React from 'react';
import ErrorButton from './ErrorButton';

const MySection = ({ title = '', children }) => {
  return (
    <section className="task-one__section">
      <h2>{title}</h2>

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
    return (
      <MySection title="My title">
        <details>
          <summary>Fragments</summary>
          <p>
            Let you group a list of children without adding extra nodes to the
            DOM
          </p>
        </details>
        <details>
          <summary>Error boundaries</summary>
          <p>
            Protects your app by catching errors allowing you to render fallback
            UI or perform side effet such as logging.
            <ErrorButton />
          </p>
        </details>
      </MySection>
    );
  }
}
