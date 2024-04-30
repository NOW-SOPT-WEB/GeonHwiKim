import { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { CARD_LIST } from "../../constants/cardlist";

const CardGame = ({ numPairs, selectedLevel, setMatchedPairsCount }) => {
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);

  const shuffleArray = (array) => {
    return array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
  };

  useEffect(() => {
    // 카드 리스트를 셔플하고, 필요한 수만큼의 카드를 선택한 후, 각 카드를 복제하여 게임 카드 배열을 준비합니다.
    const shuffledCards = shuffleArray(CARD_LIST).slice(0, numPairs); // numPairs만큼 카드를 선택
    const gameCards = [...shuffledCards, ...shuffledCards.map(card => ({...card}))]; // 각 카드를 복제하여 게임 배열 준비
    setCards(shuffleArray(gameCards)); // 게임 카드를 다시 한번 셔플

    setFlippedIndexes([]);
    setMatchedIndexes([]);
}, [numPairs, selectedLevel]); // 난이도 변경 시 리셋

  useEffect(() => {
    setMatchedPairsCount(matchedIndexes.length / 2); // 매치된 쌍의 수를 상위 컴포넌트에 전달
  }, [matchedIndexes, setMatchedPairsCount]);

  const handleCardClick = (index) => {
    if (flippedIndexes.includes(index) || matchedIndexes.includes(index)) {
      return;
    }
    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);
    if (newFlippedIndexes.length === 2) {
      const match = cards[newFlippedIndexes[0]].id === cards[newFlippedIndexes[1]].id;
      if (match) {
        setMatchedIndexes([...matchedIndexes, ...newFlippedIndexes]);
      }
      setTimeout(() => {
        setFlippedIndexes([]);
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
    width: 100%; // 이미지 비율 유지
  }
`;
