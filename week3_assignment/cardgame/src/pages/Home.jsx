import styled from "@emotion/styled";
import MainHeader from "../components/Header/header";
import LevelBtn from "../components/Button/LevelBtn";
import Card from "../components/Card/Card";
import { useState } from "react";

function Home() {
  const [numPairs, setNumPairs] = useState(5); // 기본으로 Easy 난이도의 5쌍을 설정
  const [selectedLevel, setSelectedLevel] = useState("Easy"); // 선택된 레벨 상태 추가

  const handleLevelChange = (level) => {
    setSelectedLevel(level); // 선택된 레벨 업데이트
    if (level === "Easy") setNumPairs(5);
    else if (level === "Normal") setNumPairs(7);
    else if (level === "Hard") setNumPairs(9);
  };

  return (
    <HomePageWrapper>
      <MainHeader/>
      <MainWrapper>
        <LevelBtnWrapper>
          <LevelBtn level={"Easy"} selected={selectedLevel === "Easy"} onClick={handleLevelChange} />
          <LevelBtn level={"Normal"} selected={selectedLevel === "Normal"} onClick={handleLevelChange} />
          <LevelBtn level={"Hard"} selected={selectedLevel === "Hard"} onClick={handleLevelChange} />
        </LevelBtnWrapper>
      </MainWrapper>
      <CardWrapper>
        <Card numPairs={numPairs} />
      </CardWrapper>
    </HomePageWrapper>
  );
}

export default Home;

const HomePageWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.aliceblue};
`;

const LevelBtnWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 5rem;
`;

const MainWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.aliceblue};
`;

const CardWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;
  flex-wrap: wrap;
`;
