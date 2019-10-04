import React from 'react';

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
  throwError() {
    throw new Error('Oopsy theres a little buggy wuggy');
  }

  render() {
    return (
      <MySection
        title="My title"
        description="refactor this code to use Error Boundaries and NO JSX"
      >
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
            <button onClick={this.throwError}>errors such as this</button>
          </p>
        </details>
        <details>
          <summary>JSX</summary>
          <p>Let you write React.js with the look and feel of HTML</p>
        </details>
      </MySection>
    );
  }
}
