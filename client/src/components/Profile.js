import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [fetchedUser, setFetchedUser] = useState(null);

  useEffect(() => {
    // Fetch the item data from the API (/api/get-items/:userEmail)
    fetch(`/api/get-user/${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setFetchedUser(data.item);
      });
  }, [user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated &&
    fetchedUser !== null && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{fetchedUser.firstName + " " + fetchedUser.lastName}</h2>
        <p>{fetchedUser.email}</p>
      </div>
    )
  );
};

export default Profile;
