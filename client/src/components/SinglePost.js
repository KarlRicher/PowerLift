import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const SinglePost = ({ postInfo }) => {
  const navigate = useNavigate();
  const [postAuthor, setPostAuthor] = useState(null);

  useEffect(() => {
    // Fetch the item data from the API (/api/get-items/:userEmail)
    fetch(`/api/get-user/${postInfo.authorEmail}`)
      .then((response) => response.json())
      .then((data) => {
        setPostAuthor(data.item);
      });
  }, [postInfo.authorEmail]);

  return (
    postAuthor !== null && (
      <Wrapper>
        <PostHeader>
          <AuthorAvatar
            src={postAuthor.avatar}
            onClick={() => {
              navigate(`/profile/${postInfo.authorEmail}`);
            }}
          />
          <AuthorInfo>
            <AuthorName>
              {postAuthor.firstName + " " + postAuthor.lastName + " - "}
            </AuthorName>
            <Timestamp>
              {moment(postInfo.timestamp).startOf("hour").fromNow()}
            </Timestamp>
          </AuthorInfo>
        </PostHeader>

        <PostStatus>{postInfo.status}</PostStatus>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div``;

const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 40px;
  margin-bottom: 15px;
`;

const AuthorAvatar = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 40px;
  cursor: pointer;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  margin-left: 20px;
  max-height: 50px;
`;

const AuthorName = styled.p``;

const Timestamp = styled.p`
  margin-left: 5px;
`;

const PostStatus = styled.div``;

export default SinglePost;
