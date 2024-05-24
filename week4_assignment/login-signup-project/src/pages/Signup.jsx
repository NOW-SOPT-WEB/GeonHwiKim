import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function SignUp() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const idInputRef = useRef(null);
  const pwInputRef = useRef(null);
  const nicknameInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  //전화번호 양식을 정규표현식으로 자동입력
  const handlePhoneInput = (event) => {
    let value = event.target.value;
    const numbers = value.replace(/[^\d]/g, '');
    let formatted = '';
    if (numbers.length > 0) {
      formatted = numbers.substring(0, 3);
      if (numbers.length >= 4) {
        formatted += '-' + numbers.substring(3, 7);
      }
      if (numbers.length >= 8) {
        formatted += '-' + numbers.substring(7, 11);
      }
      setPhone(formatted);
    } else {
      setPhone('');
    }
  };

  const validateForm = () => {
    const idPattern = /^[a-zA-Z0-9_]+$/;
    const pwPattern =
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    const phonePattern = /^010-\d{4}-\d{4}$/;

    let isValid = true;

    if (!id) {
      idInputRef.current.style.borderColor = 'red';
      idInputRef.current.focus();
      isValid = false;
    } else {
      idInputRef.current.style.borderColor = 'black';
    }

    if (!pw) {
      pwInputRef.current.style.borderColor = 'red';
      if (isValid) {
        pwInputRef.current.focus();
      }
      isValid = false;
    } else if (!pwPattern.test(pw)) {
      alert(
        '비밀번호가 형식(최소 8글자 이상, 숫자, 문자(a-z, A-Z), 특수문자 포함)에 맞지 않습니다.'
      );
      pwInputRef.current.style.borderColor = 'red';
      if (isValid) {
        pwInputRef.current.focus();
      }
      isValid = false;
    } else {
      pwInputRef.current.style.borderColor = 'black';
    }

    if (!nickname) {
      nicknameInputRef.current.style.borderColor = 'red';
      if (isValid) {
        nicknameInputRef.current.focus();
      }
      isValid = false;
    } else {
      nicknameInputRef.current.style.borderColor = 'black';
    }

    if (!phone) {
      phoneInputRef.current.style.borderColor = 'red';
      if (isValid) {
        phoneInputRef.current.focus();
      }
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      alert('전화번호가 형식(010-****-****)에 맞지 않습니다.');
      phoneInputRef.current.style.borderColor = 'red';
      if (isValid) {
        phoneInputRef.current.focus();
      }
      isValid = false;
    } else {
      phoneInputRef.current.style.borderColor = 'black';
    }

    if (
      isValid &&
      (!idPattern.test(id) || !pwPattern.test(pw) || !phonePattern.test(phone))
    ) {
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const response = await fetch('http://34.64.233.12:8080/member/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        authenticationId: id,
        password: pw,
        nickname: nickname,
        phone: phone,
      }),
    });

    if (response.ok) {
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    } else {
      const error = await response.json();
      alert(error.message);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <SignupPageContainer>
      <SignupBoxContainer>
        <SignupTitle>회원가입</SignupTitle>
        <SignupInputSection>
          <SignupInputContainer>
            <IdPwNicknamePhoneTitle>ID</IdPwNicknamePhoneTitle>
            <SignupInputBox
              ref={idInputRef}
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </SignupInputContainer>
          <SignupInputContainer>
            <IdPwNicknamePhoneTitle>비밀번호</IdPwNicknamePhoneTitle>
            <SignupInputBox
              ref={pwInputRef}
              type='password'
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </SignupInputContainer>
          <HintText>
            비밀번호 형식은 8자이상, 숫자, 특수문자, 영어 알파벳이 포함되어야
            합니다
          </HintText>
          <SignupInputContainer>
            <IdPwNicknamePhoneTitle>닉네임</IdPwNicknamePhoneTitle>
            <SignupInputBox
              ref={nicknameInputRef}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </SignupInputContainer>
          <SignupInputContainer>
            <IdPwNicknamePhoneTitle>전화번호</IdPwNicknamePhoneTitle>
            <SignupInputBox
              ref={phoneInputRef}
              value={phone}
              onChange={handlePhoneInput}
            />
          </SignupInputContainer>
          <HintText>전화번호 형식은 010-****-****입니다</HintText>
        </SignupInputSection>
        <SignupBtnSection>
          <SignupButton onClick={handleSubmit}>회원가입</SignupButton>
          <SignupButton onClick={handleBackClick}>뒤로가기</SignupButton>
        </SignupBtnSection>
      </SignupBoxContainer>
    </SignupPageContainer>
  );
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
  padding: 5rem 8rem;
  background-color: white;
`;

const SignupTitle = styled.h1`
  font-size: 6rem;
`;

const SignupInputSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SignupInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5rem;
`;

const IdPwNicknamePhoneTitle = styled.p`
  font-size: 3rem;
`;

const SignupInputBox = styled.input`
  width: 70%;
  height: 5rem;
  padding-left: 4rem;
  border: 1px solid black;
`;

const HintText = styled.p`
  font-size: 1rem;
  color: blue;
  margin-top: 1rem;
  margin-left: 17rem;
`;

const SignupBtnSection = styled.section`
  display: flex;
  gap: 10rem;
  margin-top: 7rem;
`;

const SignupButton = styled.button`
  width: 10rem;
  height: 5rem;
  border-radius: 1rem;
  background-color: aliceblue;
`;
