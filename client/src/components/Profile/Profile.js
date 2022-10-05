import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SinglePost from "../SinglePost";

const Profile = () => {
  const { userEmail } = useParams();
  const [fetchedUser, setFetchedUser] = useState(null);
  const [profilePosts, setProfilePosts] = useState([]);

  useEffect(() => {
    // Fetch the item data from the API (/api/get-items/:userEmail)
    fetch(`/api/get-user/${userEmail}`)
      .then((response) => response.json())
      .then((data) => {
        setFetchedUser(data.item);
      });
  }, [userEmail]);

  useEffect(() => {
    fetch(`/api/get-user-posts/${userEmail}`)
      .then((response) => response.json())
      .then((data) => {
        setProfilePosts(data.data);
      });
  }, [userEmail]);

  const filteredProfilePosts = profilePosts.sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  return (
    fetchedUser !== null && (
      <Wrapper>
        <ProfileBanner src={fetchedUser.banner} alt="User banner" />
        <BasicInfo>
          <ProfilePic src={fetchedUser.avatar} alt="User avatar" />
          <DisplayName>
            {fetchedUser.firstName + " " + fetchedUser.lastName}
          </DisplayName>
          <LifterInfo>
            <h2>Lifter's Information</h2>
            <p>Gender: {fetchedUser.gender}</p>
            <p>Bodyweight: {fetchedUser.weight}lbs</p>
          </LifterInfo>
        </BasicInfo>
        <ProfilePage>
          <ProfileFeed>
            <h1>Lifter's Posts</h1>
            {filteredProfilePosts.map((post) => {
              return (
                <PostWrapper key={post._id}>
                  <SinglePost postInfo={post} />
                </PostWrapper>
              );
            })}
          </ProfileFeed>
          <PersonalBests>
            <h1>Personal Bests</h1>
            <PR>Benchpress: {fetchedUser.bench}lbs</PR>
            <PR>Squat: {fetchedUser.squat}lbs</PR>
            <PR>Deadlift: {fetchedUser.deadlift}lbs</PR>
            <PR>Total: {fetchedUser.total}lbs</PR>
          </PersonalBests>
        </ProfilePage>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ProfileBanner = styled.img`
  width: 100%;
  max-height: 300px;
`;

const BasicInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  padding: 30px;
  max-width: 100%;
`;

const ProfilePic = styled.img`
  width: 150px;
  border: 4px solid black;
  border-radius: 200px;
`;

const DisplayName = styled.p`
  font-size: 40px;
  font-weight: bold;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
`;

const LifterInfo = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 10px;
`;

const ProfilePage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`;

const PersonalBests = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
`;

const PR = styled.p`
  background-color: white;
  border-radius: 15px;
  padding: 10px;
`;

const ProfileFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 0 10%;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  margin: 20px 0;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
`;

export default Profile;
