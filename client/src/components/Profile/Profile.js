import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SinglePost from "../SinglePost";
import { AiFillCamera } from "react-icons/ai";

const Profile = () => {
  const { userEmail } = useParams();
  const [fetchedUser, setFetchedUser] = useState(null);
  const [profilePosts, setProfilePosts] = useState([]);

  useEffect(() => {
    // Fetch the viewed profile's user's data from the API (/api/get-user/:userEmail)
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
        <ProfileHeader>
          <ProfileBanner src={fetchedUser.banner} alt="User banner" />
          <BasicInfo>
            <ProfilePic src={fetchedUser.avatar} alt="User avatar" />
            <ChangeProfilePic type="button">
              <AiFillCamera />
            </ChangeProfilePic>
            <DisplayName>
              {fetchedUser.firstName + " " + fetchedUser.lastName}
            </DisplayName>
          </BasicInfo>
        </ProfileHeader>
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
          <InfoDiv>
            <LifterInfo>
              <h2>Lifter's Information</h2>
              <p>Gender: {fetchedUser.gender}</p>
              <p>Bodyweight: {fetchedUser.weight}lbs</p>
            </LifterInfo>
            <PersonalBests>
              <h2>Personal Bests</h2>
              <PR>Benchpress: {fetchedUser.bench}lbs</PR>
              <PR>Squat: {fetchedUser.squat}lbs</PR>
              <PR>Deadlift: {fetchedUser.deadlift}lbs</PR>
              <PR>Total: {fetchedUser.total}lbs</PR>
            </PersonalBests>
          </InfoDiv>
        </ProfilePage>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom-left-radius: 15px;
`;

const ProfileBanner = styled.img`
  width: 80%;
  max-height: 300px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const BasicInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: 30px;
  width: 60%;
`;

const ProfilePic = styled.img`
  width: 150px;
  border: 4px solid black;
  border-radius: 200px;
`;

const ChangeProfilePic = styled.button`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: none;

  &:hover {
    background-color: #cc0000;
  }
`;

const DisplayName = styled.p`
  font-size: 40px;
  font-weight: bold;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  margin-left: 15px;
`;

const ProfilePage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`;

const ProfileFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 0 10%;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 30px;
`;

const LifterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  margin-top: 15px;
`;

const PersonalBests = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  margin-top: 15px;
`;

const PR = styled.p`
  line-height: 10px;
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
