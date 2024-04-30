import styled from "@emotion/styled";

const Modal = ({ onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>축하합니다!</ModalTitle>
        <CloseButton onClick={onClose}>게임으로 돌아가기</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 7rem;
  background: ${({ theme }) => theme.colors.secondmint};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
`;

const ModalTitle = styled.h1`
    font-size: ${({ theme }) => theme.fonts.xl};
`

const CloseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    margin-top: 3rem;
    padding: 3rem 15rem;
    border: 0.1rem solid;
    border-radius: 0.8rem;
    font-size: 2rem;
    background-color: ${({ theme }) => theme.colors.fourthmint};
`
