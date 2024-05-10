import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const { memberId } = useParams();

  const handleMyPageClick = () => {
    navigate(`/mypage/${memberId}`);
  }
  

  const handleJoinClick = () => {
    navigate('/signup');
  };



  return (
    <HomePageContainer>
      <HomeImg src='/src/assets/Homeimg.jpeg' />
      <HomeBtnSection>
        <HomePageBtn onClick={handleMyPageClick}>내 정보</HomePageBtn>
        <HomePageBtn onClick={handleJoinClick}>회원가입</HomePageBtn>
      </HomeBtnSection>
    </HomePageContainer>
  )
}

export default Home;

const HomePageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`

const HomeImg = styled.img`
  width: 60rem;
  height: 30rem;
  margin-top: 3rem;
`

const HomeBtnSection = styled.section`
  display: flex;
  gap: 3rem;
  margin-top: 10rem;
`

const HomePageBtn = styled.button`
  width: 10rem;
  height: 5rem;
  border-radius: 1rem;
  background-color: green;
`
