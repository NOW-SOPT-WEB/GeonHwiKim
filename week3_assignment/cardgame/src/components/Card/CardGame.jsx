import { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { CARD_LIST } from "../../constants/cardlist";
import Modal from "../Modal/Modal";
import { shuffleArray } from '../../../util/arrayUtil';

// CardGame 컴포넌트의 나머지 코드는 변경하지 않고 그대로 유지합니다...

const CardGame = ({ numPairs, selectedLevel, setMatchedPairsCount }) => {
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    resetGame();
  }, [numPairs, selectedLevel]);

  useEffect(() => {
    setMatchedPairsCount(matchedIndexes.length / 2);
    if (matchedIndexes.length === numPairs * 2) {
      setShowModal(true);
    }
  }, [matchedIndexes, setMatchedPairsCount, numPairs]);

  const handleCardClick = (index) => {
    if (isFlipping || flippedIndexes.includes(index) || matchedIndexes.includes(index)) {
      return;
    }

    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);

    if (newFlippedIndexes.length === 2) {
      setIsFlipping(true);
      const match = cards[newFlippedIndexes[0]].id === cards[newFlippedIndexes[1]].id;
      if (match) {
        setMatchedIndexes([...matchedIndexes, ...newFlippedIndexes]);
      }
      setTimeout(() => {
        setFlippedIndexes([]);
        setIsFlipping(false);
      }, 1000);
    }
  };

  const resetGame = () => {
    const shuffledCards = shuffleArray(CARD_LIST).slice(0, numPairs);
    setCards(shuffleArray([...shuffledCards, ...shuffledCards]));
    setFlippedIndexes([]);
    setMatchedIndexes([]);
    setShowModal(false);
  };

  return (
    <>
      {showModal && <Modal onClose={resetGame} />}
      <GameContainer level={selectedLevel}>
        {cards.map((card, index) => (
          <CardWrapper key={index} onClick={() => handleCardClick(index)}>
            <div className={`card ${flippedIndexes.includes(index) || matchedIndexes.includes(index) ? "flipped" : ""}`}>
              <img
                className="card-face card-front"
                src="/public/backimg.png" 
                alt="Card Back" 
              />
              <img
                className="card-face card-back"
                src={card.imgSrc} 
                alt={card.imgAlt} 
              />
            </div>
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
  perspective: 1000px;
  border-radius: 0.8rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.aliceblue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto; 

  .card {
    width: 30rem;
    height: 30rem;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;

    &.flipped {
      transform: rotateY(180deg);
    }
  }

  .card-face {
    position: absolute;
    width: 100%;
    height: 30rem;
    backface-visibility: hidden;
  }

  .card-front {
    transform: rotateY(0deg);
  }

  .card-back {
    transform: rotateY(180deg);
  }
`;
