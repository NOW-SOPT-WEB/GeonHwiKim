import styled from "@emotion/styled";
import MainHeader from "../components/Header/header";
import LevelBtn from "../components/Button/LevelBtn";
import Card from "../components/Card/Card";

function Home() {

  return (
    <HomePageWrapper>
      <MainHeader/>
      <MainWrapper>
        <LevelBtnWrapper>
          <LevelBtn level={"Easy"} />
          <LevelBtn level={"Normal"} />
          <LevelBtn level={"Hard"} />
        </LevelBtnWrapper>
      </MainWrapper>
      <CardWrapper>
        <Card />
      </CardWrapper>
    </HomePageWrapper>
  );
}

export default Home;

const HomePageWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.aliceblue}
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

