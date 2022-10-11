import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const { user } = useAuth0();
  const [fetchedUser, setFetchedUser] = useState([]);
  const [refreshContext, setRefreshContext] = useState(false);

  useEffect(() => {
    if (!user) return;
    fetch(`/api/get-user/${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setFetchedUser(data.item);
      });
  }, [user, refreshContext]);

  return (
    <UserContext.Provider
      value={{ fetchedUser, refreshContext, setRefreshContext }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
