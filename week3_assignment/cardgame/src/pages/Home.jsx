import { useState } from 'react';
import styled from "@emotion/styled";
import MainHeader from "../components/Header/header";
import LevelBtn from "../components/Button/LevelBtn";
import CardGame from "../components/Card/CardGame"; // 컴포넌트 경로 확인 필요

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
      <MainHeader />
      <MainWrapper>
        <LevelBtnWrapper>
          <LevelBtn level={"Easy"} selected={selectedLevel === "Easy"} onClick={() => handleLevelChange("Easy")} />
          <LevelBtn level={"Normal"} selected={selectedLevel === "Normal"} onClick={() => handleLevelChange("Normal")} />
          <LevelBtn level={"Hard"} selected={selectedLevel === "Hard"} onClick={() => handleLevelChange("Hard")} />
        </LevelBtnWrapper>
      </MainWrapper>
      <CardWrapper>
        <CardGame numPairs={numPairs} selectedLevel={selectedLevel} />
      </CardWrapper>
    </HomePageWrapper>
  );
}

export default Home;

const HomePageWrapper = styled.div`
  height: 100%;
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
`;
