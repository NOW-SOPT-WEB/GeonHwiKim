import styled from "@emotion/styled";

function MainHeader({ numPairs, matchedPairsCount }) {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <MainHeaderWrapper>
      <MainHeaderContent>
        <MainHeaderTitle>옷 맞추기</MainHeaderTitle>
        <ScoreDisplay>{matchedPairsCount}/{numPairs}</ScoreDisplay>
      </MainHeaderContent>
      <ResetButton onClick={handleReset}>Reset</ResetButton>
    </MainHeaderWrapper>
  );
}

export default MainHeader;

const MainHeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.secondmint};
`;

const MainHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 77rem;
`;

const MainHeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.xl};
  margin-right: 2rem;
`;

const ScoreDisplay = styled.span`
  font-size: ${({ theme }) => theme.fonts.xl};
`;

const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.large};
  padding: 3rem 6rem;
  background-color: ${({ theme }) => theme.colors.firstmint};
  border: none;
  border-radius: 5px;
`;
