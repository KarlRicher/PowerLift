import { useState, useEffect } from "react";
import styled from "styled-components";

const Leaderboard = () => {
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortedBy, setSortedBy] = useState("total");
  const [showInKg, setShowInKg] = useState(false);

  useEffect(() => {
    // if (!sortedUsers) return;
    fetch(`/api/get-sorted-users/${sortedBy}`)
      .then((response) => response.json())
      .then((data) => {
        setSortedUsers(data.data);
      });
  }, [sortedBy]);

  const handleSort = (newSort) => {
    setSortedBy(newSort);
  };

  return (
    <Wrapper>
      <Title>Leaderboard</Title>

      <ShowInDiv>
        {showInKg ? (
          <h3>Lifters' Personal Records (kg)</h3>
        ) : (
          <h3>Lifters' Personal Records (pounds)</h3>
        )}
        {!showInKg && (
          <ShowInButton onClick={() => setShowInKg(!showInKg)}>
            Show in kilograms
          </ShowInButton>
        )}
        {showInKg && (
          <ShowInButton onClick={() => setShowInKg(!showInKg)}>
            Show in pounds
          </ShowInButton>
        )}
      </ShowInDiv>

      <SortByDiv>
        <h4>Sort by:</h4>
        <SortButton onClick={() => handleSort("squat")}>Squat</SortButton>
        <SortButton onClick={() => handleSort("bench")}>Benchpress</SortButton>
        <SortButton onClick={() => handleSort("deadlift")}>Deadlift</SortButton>
        <SortButton onClick={() => handleSort("total")}>Total</SortButton>
      </SortByDiv>
      <Board>
        {sortedUsers.map((user) => {
          return showInKg ? (
            <UserWrapper key={user._id}>
              <Name>{user.firstName + " " + user.lastName}</Name>
              <InfoPiece>
                Bodyweight: {Math.round(user.weight * 0.45359237)}
              </InfoPiece>
              <InfoPiece>
                Squat: {Math.round(user.squat * 0.45359237)}
              </InfoPiece>
              <InfoPiece>
                Benchpress: {Math.round(user.bench * 0.45359237)}
              </InfoPiece>
              <InfoPiece>
                Deadlift: {Math.round(user.deadlift * 0.45359237)}
              </InfoPiece>
              <InfoPiece>
                Total: {Math.round(user.total * 0.45359237)}
              </InfoPiece>
            </UserWrapper>
          ) : (
            <UserWrapper key={user._id}>
              <Name>{user.firstName + " " + user.lastName}</Name>
              <InfoPiece>Bodyweight: {user.weight}</InfoPiece>
              <InfoPiece>Squat: {user.squat}</InfoPiece>
              <InfoPiece>Benchpress: {user.bench}</InfoPiece>
              <InfoPiece>Deadlift: {user.deadlift}</InfoPiece>
              <InfoPiece>Total: {user.total}</InfoPiece>
            </UserWrapper>
          );
        })}
      </Board>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  min-width: 1000px;
`;

const Title = styled.h1``;

const Board = styled.div``;

const ShowInDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ShowInButton = styled.button`
  display: inline-block;
  outline: 0;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 4px;
  font-size: 13px;
  height: 30px;
  background-color: #cc0000;
  color: white;
  padding: 0 20px;
  margin-left: 30px;

  :hover {
    background-color: #dc372d;
  }
`;

const SortByDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SortButton = styled.button`
  display: inline-block;
  outline: 0;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 4px;
  font-size: 13px;
  height: 30px;
  background-color: #cc0000;
  color: white;
  padding: 0 20px;
  margin: 0 20px;

  :hover {
    background-color: #dc372d;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background-color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 30px;
  /* width: ; */
`;

const Name = styled.h3`
  margin: 10px 20px;
`;

const InfoPiece = styled.p`
  margin: 0 20px;
`;

export default Leaderboard;
