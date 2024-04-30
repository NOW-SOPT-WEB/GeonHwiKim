import styled from "@emotion/styled";

const LevelBtn = ({ level, onClick }) => {
    return <Level onClick={() => onClick(level)}>{level}</Level>;
};

export default LevelBtn;

const Level = styled.button`
    padding: 3rem 6rem;
    border: 0.1rem solid;
    border-radius: 1rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`;
