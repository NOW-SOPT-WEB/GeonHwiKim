import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function SignUp() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  }

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }



  return (
    <SignupPageContainer>
      <SignupBoxContainer>
        <SignupTitle>회원가입</SignupTitle>
        <SignupInputSection>
          <SignupInputContainer>
            <IdPwNicknamePhoneTitle>ID</IdPwNicknamePhoneTitle>
            <SignupInputBox value = {id} onChange = {onChangeId} />
          </SignupInputContainer>
          <SignupInputContainer>
            <IdPwNicknamePhoneTitle>비밀번호</IdPwNicknamePhoneTitle>
            <SignupInputBox value = {pw} onChange = {onChangePw} />
          </SignupInputContainer>
          <SignupInputContainer>
            <IdPwNicknamePhoneTitle>닉네임</IdPwNicknamePhoneTitle>
            <SignupInputBox value = {nickname} onChange = {onChangeNickname} />
          </SignupInputContainer>
          <SignupInputContainer>
            <IdPwNicknamePhoneTitle>전화번호</IdPwNicknamePhoneTitle>
            <SignupInputBox value = {phone} onChange = {onChangePhone} />
          </SignupInputContainer>
        </SignupInputSection>
        <SignupBtnSection>
          <SignupButton>회원가입</SignupButton>
          <SignupButton onClick={handleBackClick}>뒤로가기</SignupButton>
        </SignupBtnSection>
      </SignupBoxContainer>
    </SignupPageContainer>
  )
}

export default SignUp;

const SignupPageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`;

const SignupBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70rem;
  height: 70rem;
  padding: 5rem 12rem;
  background-color: white;
`;

const SignupTitle = styled.h1`
  font-size: 6rem;
`;

const SignupInputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;

const SignupInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
`;

const IdPwNicknamePhoneTitle = styled.p`
  font-size: 3rem;
`;

const SignupInputBox = styled.input`
  width: 70%;
  height: 5rem;
  padding-left: 4rem;
`;

const SignupBtnSection = styled.section`
  display: flex;
  gap: 10rem;
  margin-top: 7rem;
`

const SignupButton = styled.button`
  width: 10rem;
  height: 5rem;
  border-radius: 1rem;
  background-color: aliceblue;
`;