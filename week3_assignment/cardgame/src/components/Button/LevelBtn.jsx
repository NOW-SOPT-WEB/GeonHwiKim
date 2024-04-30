import styled from '@emotion/styled';

const LevelBtn = ({ level, onClick, selected }) => {
    const handleOnClick = () => {
        onClick(level);
    };

    return <Level onClick={handleOnClick} selected={selected}>{level}</Level>;
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
    background-color: ${props => props.selected ? props.theme.colors.firstmint : props.theme.colors.white};
    color: ${props => props.selected ? props.theme.colors.white : props.theme.colors.black};
`;
