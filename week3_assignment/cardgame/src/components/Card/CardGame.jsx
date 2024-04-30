import { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { CARD_LIST } from "../../constants/cardlist";

const CardGame = ({ numPairs, selectedLevel }) => {
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);

  const shuffleArray = (array) => {
    return array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
  };

  useEffect(() => {
    // 난이도 또는 카드 쌍의 수가 변경될 때 카드를 셔플하고 게임 준비
    const shuffledCards = shuffleArray(CARD_LIST).slice(0, numPairs);
    const gameCards = [...shuffledCards, ...shuffledCards];
    setCards(shuffleArray(gameCards));
    
    // 난이도가 변경되었을 때 뒤집힌 카드와 맞춘 카드의 인덱스를 초기화
    setFlippedIndexes([]);
    setMatchedIndexes([]);
  }, [numPairs, selectedLevel]); // selectedLevel을 추가하여 난이도 변경 시 리셋되도록 함
  

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

// 게임 컨테이너 스타일을 난이도에 따라 동적으로 조정
const GameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;

  // 난이도에 따라 카드 한 줄에 몇 개씩 보여줄지 결정
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
    width: 100%; //이미지 비율 유지
  }
`;
