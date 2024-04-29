import styled from "@emotion/styled";

const StageBtn = (props) => {
    return <Stage>{props.stage}</Stage>;
};

export default StageBtn;

const Stage = styled.button`
    padding: 3rem 6rem;
    border: 0.1rem solid;
    border-radius: 1rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`;