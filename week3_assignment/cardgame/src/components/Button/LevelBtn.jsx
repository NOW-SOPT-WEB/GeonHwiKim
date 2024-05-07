import styled from '@emotion/styled';

const LevelBtn = ({ level, onClick, selected }) => {
    
    return <Level onClick={() => onClick(level)} selected={selected}>{level}</Level>;
};

export default LevelBtn;

const Level = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 6rem;
    border: 0.1rem solid;
    border-radius: 1rem;
    background-color: ${props => props.selected ? props.theme.colors.firstmint : props.theme.colors.white};
    color: ${props => props.selected ? props.theme.colors.white : props.theme.colors.black};
    font-weight: bold;
`;
