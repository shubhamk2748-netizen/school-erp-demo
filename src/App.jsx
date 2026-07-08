import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./styles.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <Dashboard logout={() => setLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default App;