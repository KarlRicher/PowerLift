import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { FiImage, FiYoutube } from "react-icons/fi";
import { AiOutlineAlert } from "react-icons/ai";

const PostBox = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  return (
    <PostForm onSubmit={(event) => {}}>
      <PicAndInput>
        <ProfilePic
          src={user.picture}
          onClick={() => {
            navigate("/profile");
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
          <AiOutlineAlert /> <ButtonSpan>PR Alert</ButtonSpan>
        </EventButton>
      </MediaDiv>
    </PostForm>
  );
};

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
  border-radius: 30px;
  border: 0.5px solid black;
  font-size: 20px;
  padding-left: 15px;
  background: #f2f2f2;
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
  max-width: 33%;

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
  max-width: 33%;

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
  max-width: 33%;

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

export default PostBox;
