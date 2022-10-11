import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Image } from "cloudinary-react";
import { UserContext } from "../UserContext";

const UpdateProfilePic = ({ data }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    newAvatarSrc,
    setNewAvatarSrc,
    setShowMediaUpload,
    refreshPage,
    setRefreshPage,
  } = data;
  const { fetchedUser, refreshContext, setRefreshContext } =
    useContext(UserContext);

  const fileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadHandler = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "gdurnoeb");

    fetch("https://api.cloudinary.com/v1_1/dplyk1z8y/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setNewAvatarSrc(data.url);
      });
  };

  const handleClick = () => {
    fetch("/api/update-profile-pic", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: fetchedUser.email,
        newAvatarSrc: newAvatarSrc,
      }),
    });
  };

  return (
    <Wrapper
      onSubmit={(event) => {
        handleClick();
        setShowMediaUpload(false);
        setRefreshPage(!refreshPage);
        setNewAvatarSrc("");
        setRefreshContext(!refreshContext);
      }}
    >
      <Input
        type="file"
        onChange={(event) => {
          fileHandler(event);
        }}
      />

      <Upload
        type="button"
        onClick={uploadHandler}
        disabled={selectedFile === null}
      >
        Upload
      </Upload>

      <CloudImage cloudName="dplyk1z8y" publicId={newAvatarSrc} />

      <Submit type="submit">Submit</Submit>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`;

const Input = styled.input`
  margin-top: 20px;
`;

const Upload = styled.button`
  margin: 10px;
`;

const CloudImage = styled(Image)`
  width: 80%;
  margin-bottom: 20px;
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

export default UpdateProfilePic;
