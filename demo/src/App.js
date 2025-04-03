
import './App.css';

import React from "react";
import { Button } from "emerald-ui"; // Import UI library

const App = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to EmeraldUI</h1>
      <p>Explore the components below:</p>
      <Button label="Primary Button" variant="primary" />
      <Button label="Secondary Button" variant="secondary" />
      <Button label="Danger Button" variant="danger" />
    </div>
  );
};

export default App;

