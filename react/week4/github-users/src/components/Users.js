import React, { useContext } from "react";
import GithubUserContext from "../context/user/UserContext";

function Users() {
  const { input, users } = useContext(GithubUserContext);
  let usersFound;
  if (input !== "" && users.length > 0) {
    usersFound = users.map((user) => {
      return (
        <div key={user.id}>
          {" "}
          {
            <img
              src={user.avatar_url}
              style={{ width: "5rem", borderRadius: "10rem" }}
              alt="profile"
            />
          }{" "}
          <br />
          {user.login}
        </div>
      );
    });
  } else {
    usersFound = " Sorry, No results!!";
  }
  return <div>{usersFound}</div>;
}
export default Users;
