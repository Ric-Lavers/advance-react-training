import React from "react";

import DetailsTable from "./DetailsTable";
import withUserDetails from "./withUserDetails";
import "./styles.scss";

const UserDetailsTable = withUserDetails(DetailsTable);

function App() {
  return (
    <div className="App">
      <UserDetailsTable />
    </div>
  );
}

export default App;
