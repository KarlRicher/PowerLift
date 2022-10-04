import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostBox from "./PostBox";
import SinglePost from "../SinglePost";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/get-posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data.data);
      });
  }, []);

  const filteredPosts = posts.sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  return (
    <Wrapper>
      <PostBox />
      <PostFeed>
        {filteredPosts.map((post) => {
          return (
            <PostWrapper>
              <SinglePost postInfo={post} />
            </PostWrapper>
          );
        })}
      </PostFeed>
      <h1>Feed</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 33.33%;
  height: 100vh;
  padding: 30px;
`;

const PostFeed = styled.div`
  width: 100%;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  max-width: 100%;
  margin: 20px 0;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
`;

export default Feed;