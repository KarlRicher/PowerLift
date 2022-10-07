import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { FiImage, FiYoutube } from "react-icons/fi";
import { AiOutlineAlert } from "react-icons/ai";
import { UserContext } from "../UserContext";
import MediaUpload from "./MediaUpload";

const PostBox = ({ refreshFeed, setRefreshFeed }) => {
  const { fetchedUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [textEntry, setTextEntry] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [showMediaUpload, setShowMediaUpload] = useState(false);
  const [publicId, setPublicId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        status: textEntry,
        authorEmail: fetchedUser.email,
        url: publicId,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("An unknown error has occurred.");
        }
      })
      .catch((error) => {
        window.alert(
          "An unknown error has occurred. Please try again shortly."
        );
      });
  };

  return (
    <PostForm
      onSubmit={(event) => {
        handleSubmit(event);
        setTextEntry("");
        setRefreshFeed(!refreshFeed);
        setShowMediaUpload(false);
        setPublicId("");
      }}
    >
      <PicAndInput>
        <ProfilePic
          src={fetchedUser.avatar}
          onClick={() => {
            navigate(`/profile/${fetchedUser.email}`);
          }}
        />
        <Input
          type="text"
          placeholder="How Strong Are You Feeling Today?"
          onChange={(event) => {
            setCharacterCount(event.target.value.length);
            setTextEntry(event.target.value);
          }}
          value={textEntry}
        ></Input>
      </PicAndInput>
      <MediaDiv>
        <PhotoButton
          type="button"
          onClick={() => {
            setShowMediaUpload(true);
          }}
        >
          <FiImage /> <ButtonSpan>Photo</ButtonSpan>
        </PhotoButton>
        <VideoButton
          type="button"
          onClick={() => {
            setShowMediaUpload(true);
          }}
        >
          <FiYoutube /> <ButtonSpan>Video</ButtonSpan>
        </VideoButton>
        <EventButton type="button">
          <AiOutlineAlert /> <ButtonSpan>PR Alert</ButtonSpan>
        </EventButton>
      </MediaDiv>
      {showMediaUpload ? (
        <MediaUpload data={{ publicId, setPublicId }} />
      ) : null}
      <Submit type="submit" disabled={characterCount === 0}>
        Submit
      </Submit>
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

const Submit = styled.button`
  width: 90%;
  border-radius: 15px;
  border: none;
  color: white;
  background-color: #cc0000;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export default PostBox;
