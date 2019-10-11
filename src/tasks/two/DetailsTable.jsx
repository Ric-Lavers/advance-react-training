import React from "react";

const DetailsTable = props => {
  const { details } = props;

  return (
    <table>
      <tbody>
        {Object.keys(details).map(k => (
          <tr key={k}>
            <td>{k}</td>
            <td>{details[k]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetailsTable;
