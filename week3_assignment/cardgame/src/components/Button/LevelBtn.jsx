import styled from "@emotion/styled";

const LevelBtn = (props) => {
    return <Level>{props.level}</Level>;
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