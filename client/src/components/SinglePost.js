import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Image } from "cloudinary-react";
import { FiTrash2 } from "react-icons/fi";
import { UserContext } from "./UserContext";

const SinglePost = ({ refreshFeed, setRefreshFeed, postInfo }) => {
  const { fetchedUser } = useContext(UserContext);
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

  const deletePost = () => {
    fetch("/api/delete-post", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postInfo),
    });
  };

  return (
    postAuthor && (
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

          {fetchedUser.email === postAuthor.email ? (
            <DeleteButton
              onClick={() => {
                deletePost();
                setRefreshFeed(!refreshFeed);
              }}
            >
              <FiTrash2 />
            </DeleteButton>
          ) : null}
        </PostHeader>

        <PostStatus>{postInfo.status}</PostStatus>

        <PostMedia cloudName="dplyk1z8y" publicId={postInfo.url} />
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

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
  justify-content: flex-start;

  margin-left: 20px;
  max-height: 50px;
  width: 100%;
`;

const AuthorName = styled.p``;

const Timestamp = styled.p`
  margin-left: 5px;
`;

const DeleteButton = styled.button`
  justify-self: flex-end;
`;

const PostStatus = styled.div`
  margin-bottom: 20px;
`;

const PostMedia = styled(Image)`
  width: 100%;
`;

export default SinglePost;
