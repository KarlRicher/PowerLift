import React, { useState } from "react";
import styled from "styled-components";

const MediaUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadHandler = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
  };

  return (
    <Wrapper>
      <Input
        type="file"
        onChange={(event) => {
          fileHandler(event);
        }}
      />
      <Upload onClick={uploadHandler} disabled={selectedFile === null}>
        Upload
      </Upload>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Input = styled.input``;

const Upload = styled.button``;

export default MediaUpload;
