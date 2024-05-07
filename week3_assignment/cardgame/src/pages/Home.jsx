import { useState } from 'react';
import styled from "@emotion/styled";
import MainHeader from "../components/Header/header";
import LevelBtn from "../components/Button/LevelBtn";
import CardGame from "../components/Card/CardGame";

// 레벨에 따른 카드 쌍 수를 객체로 정의
const levelPairs = {
  Easy: 5,
  Normal: 7,
  Hard: 9
};

function Home() {
  const [selectedLevel, setSelectedLevel] = useState("Easy"); // 선택된 레벨
  const [numPairs, setNumPairs] = useState(levelPairs[selectedLevel]); // 카드 쌍 수
  const [matchedPairsCount, setMatchedPairsCount] = useState(0); // 매치된 쌍 수

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    setNumPairs(levelPairs[level]);
    setMatchedPairsCount(0); // 레벨 변경 시 매치 수 초기화
  };

  return (
    <HomePageWrapper>
      <MainHeader numPairs={numPairs} matchedPairsCount={matchedPairsCount} />
      <MainWrapper>
        <LevelBtnWrapper>
          <LevelBtn level="Easy" selected={selectedLevel === "Easy"} onClick={() => handleLevelChange("Easy")} />
          <LevelBtn level="Normal" selected={selectedLevel === "Normal"} onClick={() => handleLevelChange("Normal")} />
          <LevelBtn level="Hard" selected={selectedLevel === "Hard"} onClick={() => handleLevelChange("Hard")} />
        </LevelBtnWrapper>
      </MainWrapper>
      <CardWrapper>
        <CardGame numPairs={numPairs} selectedLevel={selectedLevel} setMatchedPairsCount={setMatchedPairsCount} />
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
