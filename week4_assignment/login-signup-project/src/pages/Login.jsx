import styled from "styled-components";

function Login() {
  return (
    <LoginPageContainer>
      <LoginBoxContainer>
        <LoginTitle>Login</LoginTitle>
        <LoginImg src="/src/assets/loginmainimg.png" />
        <InputSection>
          <InputContainer>
            <IdPwTitle>ID</IdPwTitle>
            <InputBox />
          </InputContainer>
          <InputContainer>
            <IdPwTitle>PW</IdPwTitle>
            <InputBox />
          </InputContainer>
        </InputSection>
        <BtnSection>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </BtnSection>
      </LoginBoxContainer>
    </LoginPageContainer>
  );
}

export default Login;

const LoginPageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`

const LoginBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50rem;
  height: 50rem;
  padding: 5rem 7rem;
  background-color: white;
`

const LoginTitle = styled.h1`
  font-size: 3rem;
`

const LoginImg = styled.img`
  width: 12rem;
  height: 12rem;
  margin-top: 3rem;
`

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
`

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 3rem;
`

const IdPwTitle = styled.p`
  font-size: 3rem;
`

const InputBox = styled.input`
  width: 80%;
  height: 4rem;
  padding-left: 1rem;
`

const BtnSection = styled.section`
  display: flex;

  gap: 3rem;
  margin-top: 3rem;
`

const Button = styled.button`
  width: 10rem;
  height: 5rem;

  border-radius: 1rem;
  
  background-color: aliceblue;
`