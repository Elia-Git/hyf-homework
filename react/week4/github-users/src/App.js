import React, { useState } from "react";
import "./App.css";
import SearchField from "./components/SearchField";
import GithubUserContext from "./context/user/UserContext";

function App() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <GithubUserContext.Provider
        value={{
          input,
          setInput,
          isLoading,
          setIsLoading,
          users,
          setUsers,
          err,
          setErr,
        }}
      >
        {" "}
        <h1>Github Users seacher</h1>
        <SearchField />
      </GithubUserContext.Provider>
    </div>
  );
}

export default App;
