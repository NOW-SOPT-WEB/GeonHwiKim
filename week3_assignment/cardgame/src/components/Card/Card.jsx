import styled from "@emotion/styled";
import { CARD_LIST } from "../../constants/cardlist";

const Card = () => {
  // 배열을 섞는 함수 정의
  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  // CARD_LIST 배열을 랜덤하게 섞기
  const shuffledCards = shuffleArray(CARD_LIST);

  return shuffledCards.map((card, index) => (
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
