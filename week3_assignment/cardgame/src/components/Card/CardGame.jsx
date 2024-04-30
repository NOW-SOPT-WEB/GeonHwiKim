import { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { CARD_LIST } from "../../constants/cardlist";
import Modal from "../Modal/Modal"; // 모달 컴포넌트를 임포트합니다.

const CardGame = ({ numPairs, selectedLevel, setMatchedPairsCount }) => {
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태

  const shuffleArray = (array) => {
    return array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
  };

  useEffect(() => {
    resetGame();
  }, [numPairs, selectedLevel]);

  useEffect(() => {
    setMatchedPairsCount(matchedIndexes.length / 2);
    if (matchedIndexes.length === numPairs * 2) {
      setShowModal(true); // 모든 쌍이 매치되었을 때 모달 표시
    }
  }, [matchedIndexes, setMatchedPairsCount, numPairs]);

  const handleCardClick = (index) => {
    if (isFlipping || flippedIndexes.includes(index) || matchedIndexes.includes(index)) {
      return; // 카드가 뒤집히는 중이거나 이미 선택된 경우 클릭을 무시
    }

    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);

    if (newFlippedIndexes.length === 2) {
      setIsFlipping(true); // 추가 클릭 방지를 위해 플래그 설정
      const match = cards[newFlippedIndexes[0]].id === cards[newFlippedIndexes[1]].id;
      if (match) {
        setMatchedIndexes([...matchedIndexes, ...newFlippedIndexes]);
      }
      setTimeout(() => {
        setFlippedIndexes([]);
        setIsFlipping(false); // 뒤집기 완료 후 클릭 가능하도록 플래그 해제
      }, 1000);
    }
  };

  const resetGame = () => {
    const shuffledCards = shuffleArray(CARD_LIST).slice(0, numPairs);
    const gameCards = [...shuffledCards, ...shuffledCards.map(card => ({ ...card }))];
    setCards(shuffleArray(gameCards)); // 카드 재셔플
    setFlippedIndexes([]);
    setMatchedIndexes([]);
    setShowModal(false); // 모달 숨기기
  };

  return (
    <>
      {showModal && <Modal onClose={resetGame} />}
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
    </>
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
    width: 100%; // 이미지의 비율을 유지
  }
`;
