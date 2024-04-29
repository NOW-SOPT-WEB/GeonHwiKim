import styled from "@emotion/styled";
import MainHeader from "../components/Header/header";
import StageBtn from "../components/Button/StageBtn"

function Home() {

  return (
    <HomePageWrapper>
      <MainHeader/>
      <StageBtnWrapper>
        <StageBtn stage={"Easy"} />
        <StageBtn stage={"Normal"} />
        <StageBtn stage={"Hard"} />
      </StageBtnWrapper>
    </HomePageWrapper>
  );
}

export default Home;

const HomePageWrapper = styled.div`
  height: 100vh;
  background-color: aliceblue;
`;

const StageBtnWrapper = styled.section`
  display: flex;
  gap: 1.5rem;
`
