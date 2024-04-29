
import styled from "styled-components";
import { useState } from "react";
function App() {
  const [buttonState, setButtonsState] = useState(true);
  return (
    <AppWrapper>
      <Title>실습을 해봅시다!</Title>
      <SubTitle>새싹이들!</SubTitle>
      <ButtonWrapper
        state={buttonState}
        onClick={() => setButtonsState(!buttonState)}
      >
        버튼
      </ButtonWrapper>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: grey;
`;
const Title = styled.h1`
  font-size: 3rem;
`;
const SubTitle = styled.h2`
  font-size: 2rem;
`;
const ButtonWrapper = styled.button`
  cursor: pointer;
  width: 5rem;
  height: 3rem;
  background-color: ${({ state }) => (state ? "yellow" : "green")};
  color: black;
`;
