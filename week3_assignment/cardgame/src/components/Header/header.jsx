import styled from "@emotion/styled";

function MainHeader() {
  return (
    <MainHeaderWrapper>
      <MainHeaderTitle>옷 맞추기</MainHeaderTitle>
    </MainHeaderWrapper>
  );
}

export default MainHeader;

const MainHeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;

  width: 100%;
  height: 20rem;

  color: ${({ theme }) => theme.colors.black};;

  background-color: ${({ theme }) => theme.colors.secondmint};
`;

const MainHeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.xxl};
`;