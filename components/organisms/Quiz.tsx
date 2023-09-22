import styled, { css } from 'styled-components';

export default function Quiz() {
  return (
    <QuizContainer>
      <CategoryBar>
        <Category selected>Quiz</Category>
        <Category>Chat</Category>
      </CategoryBar>
      <Content>
        <div className="question-title">Question 1</div>
        <div className="question-content">What is the capital of Indonesia?</div>
        <div className="choice-container">
          <ChoiceBox>
            선점 스케줄링은 일단 프로세스가 CPU를 점유하면 완료될 때가 CPU를 사용할 수 없다.
          </ChoiceBox>
          <ChoiceBox>
            선점 스케줄링은 일단 프로세스가 CPU를 점유하면 완료될 때가 CPU를 사용할 수 없다.
          </ChoiceBox>
          <ChoiceBox>
            선점 스케줄링은 일단 프로세스가 CPU를 점유하면 완료될 때가 CPU를 사용할 수 없다.
          </ChoiceBox>
          <ChoiceBox>
            선점 스케줄링은 일단 프로세스가 CPU를 점유하면 완료될 때가 CPU를 사용할 수 없다.
          </ChoiceBox>
        </div>
      </Content>
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
  /* background-color: #000; */
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
  padding: 20px 30px;

  .question-title {
    color: #212121;
    font-family: CreatoDisplay;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .question-content {
    color: #212121;
    font-family: CreatoDisplay;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
  }

  .choice-container {
    width: 100%;
    margin-top: 20px;
  }
`;

const ChoiceBox = styled.div<{ selected?: boolean }>`
  ${({ selected }) => css`
    width: 100%;
    border-radius: 16px;
    border: 1px solid rgba(108, 102, 133, 0.2);
    background: rgba(58, 56, 77, 0.04);
    color: #212121;
    font-family: CreatoDisplay;
    font-size: 12px;
    font-weight: 400;
    padding: 12px 16px;
    margin-bottom: 20px;
    cursor: pointer;
  `}
`;
