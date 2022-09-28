import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import viking from "../assets/viking.png";
import { FiImage, FiYoutube, FiCalendar } from "react-icons/fi";

const Feed = () => {
  const navigate = useNavigate();
  // const { currentUser } = useContext(CurrentUserContext);

  return (
    <Wrapper>
      <h1>Feed</h1>
      <PostForm onSubmit={(event) => {}}>
        <PicAndInput>
          <ProfilePic
            src={viking}
            onClick={() => {
              navigate("/:userOrSomething");
            }}
          />
          <Input type="text" placeholder="Feeling Strong Today?"></Input>
        </PicAndInput>
        <MediaDiv>
          <PhotoButton>
            <FiImage /> <ButtonSpan>Photo</ButtonSpan>
          </PhotoButton>
          <VideoButton>
            <FiYoutube /> <ButtonSpan>Video</ButtonSpan>
          </VideoButton>
          <EventButton>
            <FiCalendar /> <ButtonSpan>Event</ButtonSpan>
          </EventButton>
        </MediaDiv>
      </PostForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 33.33%;
  height: 100vh;
  padding: 30px;
  border-right: 1px solid grey;
  border-left: 1px solid grey;
`;

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: white;
  border-radius: 15px;
`;

const PicAndInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 20px;
`;

const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 100px;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  font-size: 20px;
  padding-left: 15px;
`;

const MediaDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid grey;
  width: 90%;
`;

const PhotoButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #25a7da;
  background: none;
  border: none;
  font-size: 1.75em;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background: lightgrey;
  }
`;

const VideoButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #cc0000;
  background: none;
  border: none;
  font-size: 1.75em;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background: lightgrey;
  }
`;

const EventButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #339933;
  background: none;
  border: none;
  font-size: 1.75em;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background: lightgrey;
  }
`;

const ButtonSpan = styled.span`
  color: grey;
  margin-left: 15px;
  font-size: 0.8em;
`;

export default Feed;
