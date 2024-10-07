import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';

function Home() {
  const navigate = useNavigate();
  const { memberId } = useParams();
  const videoRef = useRef(null);

  const handleMyPageClick = () => {
    navigate(`/mypage/${memberId}`);
  };

  const handleJoinClick = () => {
    navigate('/signup');
  };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
  };

  return (
    <HomePageContainer>
      <HomeVideo ref={videoRef} src='/src/assets/video.mp4' onClick={togglePlay} />
      <HomePageBox>
        <VideoBtn onClick={togglePlay}>재생/일시정지</VideoBtn>
        <VideoBtn onClick={toggleMute}>음소거/음소거 해제</VideoBtn>
      </HomePageBox>
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
`;

const HomePageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 3rem;
`;

const HomeVideo = styled.video.attrs({
  autoPlay: true,
  muted: true,
})`
  width: 60rem;
  height: 30rem;
  margin-top: 3rem;
  cursor: pointer;
`;

const VideoBtn = styled.button`
  width: 10rem;
  height: 5rem;
  border-radius: 1rem;
  margin-top: 3rem;
  background-color: yellow;
`

const HomeBtnSection = styled.section`
  display: flex;
  gap: 3rem;
  margin-top: 10rem;
`;

const HomePageBtn = styled.button`
  width: 10rem;
  height: 5rem;
  border-radius: 1rem;
  background-color: green;
`;
