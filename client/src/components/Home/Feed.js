import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostBox from "./PostBox";
import SinglePost from "../SinglePost";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [refreshFeed, setRefreshFeed] = useState(false);

  useEffect(() => {
    fetch("/api/get-posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      });
  }, [refreshFeed]);

  const filteredPosts = posts.sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  return (
    <Wrapper>
      <PostBox refreshFeed={refreshFeed} setRefreshFeed={setRefreshFeed} />
      <PostFeed>
        {filteredPosts.map((post) => {
          return (
            <PostWrapper key={post._id}>
              <SinglePost
                postInfo={post}
                refreshFeed={refreshFeed}
                setRefreshFeed={setRefreshFeed}
              />
            </PostWrapper>
          );
        })}
      </PostFeed>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;

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
