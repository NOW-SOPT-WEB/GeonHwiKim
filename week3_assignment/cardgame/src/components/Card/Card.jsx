import styled from "@emotion/styled";
import { CARD_LIST } from "../../constants/cardlist";

const Card = () => {
  return CARD_LIST.map((card, index) => (
    <CardWrapper key={index}>
      <img src={card.imgSrc} alt={card.imgAlt} />
    </CardWrapper>
  ));
};

export default Card;

const CardWrapper = styled.article`
  border-radius: 0.8rem;
  padding: 5rem 3rem;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 15rem;
    height: 20rem;
  }
`;
