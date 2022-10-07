import React, { useState } from "react";
import styled from "styled-components";
import { Image } from "cloudinary-react";

const MediaUpload = ({ data }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const { publicId, setPublicId } = data;

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
        setPublicId(data.url);
      });
  };

  return (
    <Wrapper>
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

      <CloudImage cloudName="dplyk1z8y" publicId={publicId} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export default MediaUpload;
