import { useState } from 'react';
import styled from "@emotion/styled";
import MainHeader from "../components/Header/header";
import CardGame from "../components/Card/CardGame";
import LevelSelector from '../components/Level/LevelSelector';

const levelPairs = {
  Easy: 5,
  Normal: 7,
  Hard: 9
};

function Home() {
  const [selectedLevel, setSelectedLevel] = useState("Easy");
  const [numPairs, setNumPairs] = useState(levelPairs[selectedLevel]);
  const [matchedPairsCount, setMatchedPairsCount] = useState(0);

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    setNumPairs(levelPairs[level]);
    setMatchedPairsCount(0);
  };

  return (
    <HomePageWrapper>
      <MainHeader numPairs={numPairs} matchedPairsCount={matchedPairsCount} />
      <MainWrapper>
        <LevelSelector selectedLevel={selectedLevel} handleLevelChange={handleLevelChange} />
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
