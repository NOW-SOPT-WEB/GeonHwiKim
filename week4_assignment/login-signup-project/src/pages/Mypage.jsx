import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function MyPage() {
  const [userInfo, setUserInfo] = useState({ id: '', nickname: '', phone: '' });
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwords, setPasswords] = useState({
    previousPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const { memberId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://34.64.233.12:8080/member/info`, {
          method: 'GET',
          headers: {
            memberId: memberId,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUserInfo({
            id: data.data.authenticationId,
            nickname: data.data.nickname,
            phone: data.data.phone,
          });
        } else {
          throw new Error(data.message || 'Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
        alert('An error occurred while fetching user data. Please try again.');
      }
    };

    fetchData();
  }, [memberId]);

  const handleTogglePasswordForm = () => {
    setShowPasswordForm(!showPasswordForm);
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !passwords.previousPassword ||
      !passwords.newPassword ||
      !passwords.confirmPassword
    ) {
      alert('모든 입력창이 채워져야합니다.');
      return;
    }
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert('입력한 두 비밀번호가 일치하지 않습니다.');
      return;
    }
    console.log(
      JSON.stringify({
        previousPassword: passwords.previousPassword,
        newPassword: passwords.newPassword,
        confirmPassword: passwords.confirmPassword,
      })
    );

    try {
      const response = await fetch('http://34.64.233.12:8080/member/password', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          memberId: memberId,
        },
        body: JSON.stringify({
          previousPassword: passwords.previousPassword,
          newPassword: passwords.newPassword,
          newPasswordVerification: passwords.confirmPassword,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to change password');
      }
      alert('Password successfully updated');
      setShowPasswordForm(false);
      setPasswords({
        previousPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (error) {}
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <MyPageContainer>
      <MyPageBox>
        <InfoRow>
          <MyPageTitle>ID</MyPageTitle>
          <Value>{userInfo.id}</Value>
        </InfoRow>
        <InfoRow>
          <MyPageTitle>닉네임</MyPageTitle>
          <Value>{userInfo.nickname}</Value>
        </InfoRow>
        <InfoRow>
          <MyPageTitle>전화번호</MyPageTitle>
          <Value>{userInfo.phone}</Value>
        </InfoRow>
        <PassWordContainer>
          <PassWordButton onClick={handleTogglePasswordForm}>
            비밀번호 변경
          </PassWordButton>
          {showPasswordForm && (
            <form onSubmit={handleSubmit}>
              <Input
                name='previousPassword'
                placeholder='현재 비밀번호'
                onChange={handleChange}
              />
              <Input
                name='newPassword'
                placeholder='새로운 비밀번호'
                onChange={handleChange}
              />
              <Input
                name='confirmPassword'
                placeholder='비밀번호 확인'
                onChange={handleChange}
              />
              <SubButton type='submit'>비밀번호 변경</SubButton>
            </form>
          )}
        </PassWordContainer>
        <HomeButton onClick={handleGoHome}>Home</HomeButton>
      </MyPageBox>
    </MyPageContainer>
  );
}

export default MyPage;

const MyPageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: aliceblue;
`;

const MyPageBox = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70rem;
  height: 70rem;
  padding: 5rem 16rem;
  background-color: white;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
`;

const MyPageTitle = styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin-right: 5rem;
`;

const Value = styled.p`
  font-size: 3rem;
`;

const PassWordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const PassWordButton = styled.button`
  width: 10rem;
  height: 5rem;
  font-size: 2rem;
  margin-top: 2rem;
  cursor: pointer;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  font-size: 2rem;
`;

const SubButton = styled.button`
  width: 10rem;
  height: 5rem;
  border-radius: 1rem;
  background-color: aliceblue;
  margin-top: 2rem;
  margin-left: 6.8rem;
`;

const HomeButton = styled.button`
  position: absolute;
  top: 70rem;
  width: 10rem;
  height: 5rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 2rem;
  cursor: pointer;
  background-color: aliceblue;
`;
