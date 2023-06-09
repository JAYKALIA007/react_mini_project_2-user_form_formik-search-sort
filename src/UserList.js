import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const UserList = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const users = useSelector((store) => store.user.users);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);
  useEffect(() => {
    filterUsers();
  }, [searchText]);

  const filterUsers = () => {
    const filteredUserArray = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredUsers(filteredUserArray);
  };

  const sortUsers = () => {
    const sortedUserArray = filteredUsers
      .slice()
      .sort((a, b) =>
        a.firstName > b.firstName ? 1 : a.firstName < b.firstName ? -1 : 0
      );
    setFilteredUsers(sortedUserArray);
  };

  return users.length === 0 ? (
    `No users found`
  ) : (
    <>
      <p>User count = {users.length}</p>
      <input
        name="searchText"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button onClick={() => sortUsers()}>Sort</button>
      <span>User List</span>
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
