import styled from "@emotion/styled";
import { CARD_LIST } from "../../constants/cardlist";

const Card = ({ numPairs }) => {
  const shuffleArray = (array) => {
    return array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
  };

  // 필요한 수의 카드만 선택하고 섞기
  const shuffledCards = shuffleArray(CARD_LIST).slice(0, numPairs);

  // 카드 배열을 두 배로 확장
  const doubledCards = [...shuffledCards, ...shuffledCards];

  return doubledCards.map((card, index) => (
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
