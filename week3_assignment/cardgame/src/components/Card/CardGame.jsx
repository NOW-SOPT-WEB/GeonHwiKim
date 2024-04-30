import { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { CARD_LIST } from "../../constants/cardlist";

const CardGame = ({ numPairs, selectedLevel, setMatchedPairsCount }) => {
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [isFlipping, setIsFlipping] = useState(false);  // 카드가 뒤집히고 있는지 여부를 추적

  const shuffleArray = (array) => {
    return array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
  };

  useEffect(() => {
    const shuffledCards = shuffleArray(CARD_LIST).slice(0, numPairs);
    const gameCards = [...shuffledCards, ...shuffledCards.map(card => ({...card}))];
    setCards(shuffleArray(gameCards));
    setFlippedIndexes([]);
    setMatchedIndexes([]);
  }, [numPairs, selectedLevel]);

  useEffect(() => {
    setMatchedPairsCount(matchedIndexes.length / 2);
  }, [matchedIndexes, setMatchedPairsCount]);

  const handleCardClick = (index) => {
    if (isFlipping || flippedIndexes.includes(index) || matchedIndexes.includes(index)) {
      return; // isFlipping 상태가 true이거나 카드가 이미 뒤집혀있거나 매치된 경우 더 이상 진행하지 않음
    }

    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);

    if (newFlippedIndexes.length === 2) {
      setIsFlipping(true); // 두 카드가 뒤집힌 상태에서 다른 카드의 클릭을 막음
      const match = cards[newFlippedIndexes[0]].id === cards[newFlippedIndexes[1]].id;
      if (match) {
        setMatchedIndexes([...matchedIndexes, ...newFlippedIndexes]);
      }
      setTimeout(() => {
        setFlippedIndexes([]);
        setIsFlipping(false); // 뒤집기 애니메이션 후 isFlipping을 false로 설정하여 다른 카드를 클릭할 수 있게 함
      }, 1000);
    }
  };

  return (
    <GameContainer level={selectedLevel}>
      {cards.map((card, index) => (
        <CardWrapper key={index} onClick={() => handleCardClick(index)}>
          <img
            src={card.imgSrc}
            alt={card.imgAlt}
            style={{ visibility: flippedIndexes.includes(index) || matchedIndexes.includes(index) ? 'visible' : 'hidden' }}
          />
        </CardWrapper>
      ))}
    </GameContainer>
  );
};

export default CardGame;

const GameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;

  article {
    width: ${({ level }) => (level === "Easy" ? "18%" : level === "Normal" ? "13.5%" : "10%")};
  }
`;

const CardWrapper = styled.article`
  border-radius: 0.8rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.thirdmint};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;
