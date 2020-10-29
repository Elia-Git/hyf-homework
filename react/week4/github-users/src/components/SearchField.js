import React, { useEffect, useContext } from "react";
import Users from "./Users";
//import GithubUserContext
import GithubUserContext from "../context/user/UserContext";

const SearchField = () => {
  const {
    input,
    setInput,
    setUsers,
    isLoading,
    setIsLoading,
    err,
    setErr,
  } = useContext(GithubUserContext);

  useEffect(() => {
    if (input === "") {
      //alert("please enter a username");
      return;
    }
    setIsLoading(true);

    fetch(`https://api.github.com/search/users?q=${input}`)
      .then((res) => res.json())
      .then((usersData) => {
        setUsers(usersData.items);
        setIsLoading(false);
        setInput();
      })
      .catch((err) => {
        setErr(err);
        setIsLoading(false);
      });
  }, [input, setInput, setUsers, setIsLoading, setErr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <div>
      {err && <div>{err}</div>}
      <form className="input-form" onChange={handleSubmit}>
        <input
          className="src-input"
          type="text"
          name="input"
          placeholder="Search for user"
        />
      </form>
      {isLoading && <p>Loading...</p>}
      <br />
      <Users />
    </div>
  );
};

export default SearchField;
