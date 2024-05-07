// components/LevelSelector.js
import styled from '@emotion/styled';
import LevelBtn from './Button/LevelBtn';

const LevelSelector = ({ selectedLevel, handleLevelChange }) => {
  return (
    <LevelBtnWrapper>
      <LevelBtn level="Easy" selected={selectedLevel === "Easy"} onClick={() => handleLevelChange("Easy")} />
      <LevelBtn level="Normal" selected={selectedLevel === "Normal"} onClick={() => handleLevelChange("Normal")} />
      <LevelBtn level="Hard" selected={selectedLevel === "Hard"} onClick={() => handleLevelChange("Hard")} />
    </LevelBtnWrapper>
  );
};

export default LevelSelector;

const LevelBtnWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 5rem;
`;
