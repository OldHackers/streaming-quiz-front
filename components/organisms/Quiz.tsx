//@ts-nocheck

import { SetStateAction, useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

import { Choice, Quiz } from '../../entity/quiz';
import Chat from './Chat';

interface Props {
  quizData?: Quiz | null;
  setQuizData: React.Dispatch<SetStateAction<Quiz | null>>;
  isAfterAnswer: boolean;
  setIsAfterAnswer: React.Dispatch<SetStateAction<boolean>>;
  height?: number;
  id: string;
}

const enum Mode {
  Quiz = 'quiz',
  Chat = 'chat',
}

export default function QuizBox({
  quizData,
  setQuizData,
  isAfterAnswer,
  setIsAfterAnswer,
  height,
  id,
}: Props) {
  console.log(quizData);
  const [mode, setMode] = useState(Mode.Quiz);

  useEffect(() => {
    console.log(isAfterAnswer);
  }, [isAfterAnswer]);

  const checkAnswer = (choice: Choice) => {
    if (choice.isAnswer) {
      setQuizData({
        ...quizData,
        choiceList: quizData?.choiceList.map((item) => {
          if (item.id === choice.id) {
            return {
              ...item,
              boxOption: 'correct',
            };
          }
          return item;
        }),
      });
    } else {
      setQuizData({
        ...quizData,
        choiceList: quizData.choiceList.map((item) => {
          if (item.id === choice.id) {
            return {
              ...item,
              boxOption: 'incorrect',
            };
          }
          if (item.isAnswer) {
            return {
              ...item,
              boxOption: 'correct',
            };
          }
          return item;
        }),
      });
    }

    setIsAfterAnswer(true);
  };

  return (
    <QuizContainer>
      <CategoryBar>
        <Category
          selected={mode === Mode.Quiz}
          onClick={() => {
            setMode(Mode.Quiz);
          }}
        >
          Quiz
        </Category>
        <Category
          selected={mode === Mode.Chat}
          onClick={() => {
            setMode(Mode.Chat);
          }}
        >
          Chat
        </Category>
      </CategoryBar>
      {mode === Mode.Quiz ? (
        <Content>
          {quizData ? (
            <>
              <div className="question-title">Question</div>
              <div className="question-content">{quizData.question}</div>
              <div className="choice-container">
                {quizData.choiceList.map((choice, index) => (
                  <ChoiceBox
                    key={choice.id}
                    onClick={() => (isAfterAnswer ? null : checkAnswer(choice))}
                    selected={choice.boxOption}
                  >
                    {choice.content}
                  </ChoiceBox>
                ))}
              </div>
            </>
          ) : (
            <div className="no-quiz">Quiz will be shown here soon. </div>
          )}
          {isAfterAnswer && (
            <div className="answer-container">
              <div className="question-title">Answer</div>
              <div className="answer-box">{quizData?.commentary}</div>
            </div>
          )}
        </Content>
      ) : (
        <Content>
          <Chat height={height} id={id} />
        </Content>
      )}
    </QuizContainer>
  );
}

const QuizContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const CategoryBar = styled.div`
  width: 100%;
  margin-top: 9px;
  height: 40px;
  background-color: #1b1d25;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Category = styled.div<{
  selected?: boolean;
}>`
  ${({ selected }) => css`
    height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${selected ? '#625df5' : '#6c6685'};
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    width: 69px;
    border-bottom: ${selected ? '3px solid #625df5' : 'none'};
    margin-right: 10px;
    cursor: pointer;
  `}
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 30px;

  .no-quiz {
    width: 100%;
    position: relative;
    /* color: #212121; */
    color: #fefefe;
    font-family: CreatoDisplay;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .question-title {
    color: #fefefe;
    font-family: CreatoDisplay;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .question-content {
    color: #fefefe;
    font-family: CreatoDisplay;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
  }

  .choice-container {
    width: 100%;
    margin-top: 20px;
  }

  .answer-container {
    width: 100%;
    border-top: 1px solid #fefefe;
    padding-top: 20px;

    .answer-box {
      margin-top: 14px;
      width: 100%;
      border-radius: 16px;
      border: 1px solid #fefefe;
      background: rgba(58, 56, 77, 0.04);
      color: #fefefe;
      font-family: CreatoDisplay;
      font-size: 12px;
      font-weight: 400;
      padding: 12px 16px;
      margin-bottom: 20px;
      line-height: 1.5;
    }
  }
`;

const ChoiceBox = styled.div<{ selected?: string }>`
  ${({ selected }) => css`
    width: 100%;
    border-radius: 16px;
    border: 1px solid #fefefe;
    background: rgba(58, 56, 77, 0.04);

    color: #fefefe;
    font-family: CreatoDisplay;
    font-size: 12px;
    font-weight: 400;
    padding: 12px 16px;
    margin-bottom: 20px;
    cursor: pointer;
    line-height: 1.5;

    ${selected === 'correct' &&
    css`
      border-color: 1px solid rgba(50, 218, 97, 0.87);

      background-color: rgba(1, 211, 98, 0.24);
    `}

    ${selected === 'incorrect' &&
    css`
      background-color: rgba(211, 1, 1, 0.24);
      border-color: 1px solid rgba(218, 50, 120, 0.87);
    `}
  `}
`;
