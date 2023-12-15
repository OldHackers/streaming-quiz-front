import axios from 'axios';
import { use, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Message } from '../../entity/chat';

interface Props {
  height?: number;
}

export default function Chat({ height }: Props) {
  console.log(height);
  const messageRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [messageList, setMessageList] = useState<Message[]>([
    { text: 'hello', isMine: true },
    { text: 'hello', isMine: false },
    { text: 'hello', isMine: true },
    {
      text: 'helhellohellohellohellohellohellolhellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohelloo',
      isMine: false,
    },
    { text: 'hello', isMine: true },
    { text: 'hello', isMine: false },
    { text: 'hello', isMine: true },
    { text: 'hello', isMine: false },
    { text: 'hello', isMine: true },
    { text: 'hello', isMine: false },
    { text: 'hello', isMine: true },

    { text: 'hello', isMine: false },
  ]);

  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonSubmit = async () => {
    console.log(inputValue);
    setMessageList([...messageList, { text: inputValue, isMine: true }]);
    setInputValue('');
    const response = await axios.post('/api/openaiChat', {
      message: inputValue,
      query: 'adfeef',
    });

    console.log(response);
  };

  const handleEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleButtonSubmit();
    }
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current?.scrollTo(0, messageRef.current.scrollHeight);
    }
  }, [messageList]);

  return (
    <ChatContainer>
      <MessageContainer height={height} ref={messageRef}>
        {messageList.map((message) => (
          <BubbleWrapper isMine={message.isMine}>
            <Bubble>{message.text}</Bubble>
          </BubbleWrapper>
        ))}
      </MessageContainer>
      <InputContainer>
        <CustomInput
          type="text"
          value={inputValue}
          onChange={handleInputChanged}
          onKeyDown={handleEnterSubmit}
        />
        <SubmitButton onClick={() => handleButtonSubmit()}>send</SubmitButton>
      </InputContainer>
      <EmptySpace />
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  position: relative;
`;

const MessageContainer = styled.div<{ height?: number }>`
  width: 100%;
  ${({ height }) =>
    height &&
    css`
      max-height: ${height}px;
    `}
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const BubbleWrapper = styled.div<{ isMine: boolean }>`
  width: 100%;
  /* max-width: 200px; */
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  ${({ isMine }) =>
    isMine
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: flex-start;
        `}
`;

const Bubble = styled.div`
  max-width: 200px;
  overflow: hidden;
  word-wrap: break-word;
  padding: 12px;
  font-size: 12px;
  border-radius: 16px;
  border: 1px solid #fefefe;
  background: rgba(58, 56, 77, 0.04);
  color: #fefefe;
`;

const InputContainer = styled.div`
  width: 100%;
  background-color: #1b1d25;
  border-top: 2px solid rgba(249, 248, 252, 0.2);
  position: absolute;
  bottom: 56px;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 20px 0 0;
`;

const EmptySpace = styled.div`
  width: 100%;
  height: 86px;
`;

const CustomInput = styled.input`
  width: 100%;
  height: 56px;
  border: 2px solid #fefefe;
  outline: none;
  border-radius: 16px;
  padding: 0 20px;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #fefefe;
  background-color: #1b1d25;
`;

const SubmitButton = styled.div`
  width: 56px;
  height: 56px;
  color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  cursor: pointer;
`;
