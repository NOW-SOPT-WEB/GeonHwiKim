import styled from "@emotion/styled";
import MainHeader from "../components/Header/header";

function Home() {

  return (
    <HomePageWrapper>
      <MainHeader/>
    </HomePageWrapper>
  );
}

export default Home;

const HomePageWrapper = styled.div`
  height: 100vh;
`;
