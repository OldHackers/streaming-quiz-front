import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { dummyVideos } from '../../database/dummy';
import { Quiz } from '../../entity/quiz';
import { Video } from '../../entity/video';
import Header from '../organisms/Header';
import QuizBox from '../organisms/Quiz';
import VideoCard from '../organisms/VideoCard';
import VideoPlayer from '../organisms/VideoPlayer';

interface Props {
  videoData: Video;
}

export default function HomeTemplate({ videoData }: Props) {
  console.log(videoData);

  const [currentTime, setCurrentTime] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [isAfterAnswer, setIsAfterAnswer] = useState(false);

  const handleProgress = (state: any) => {
    const { playedSeconds } = state;
    setCurrentTime(playedSeconds);
  };

  const findCurrentQuiz = (time: number) => {
    const idx = Math.min(Math.floor(time / 900), videoData?.quizzes.length);

    if (idx >= 1) {
      const quiz = videoData?.quizzes.find((item) => item.idx === idx);
      return quiz;
    }

    return null;
  };

  useEffect(() => {
    const newQuiz = findCurrentQuiz(currentTime);
    if (currentQuiz?.id !== newQuiz?.id) {
      newQuiz?.choiceList.forEach((choice) => {
        choice.boxOption = 'normal';
      });
      //@ts-ignore
      setCurrentQuiz(newQuiz);
      setIsAfterAnswer(false);
    }
    console.log(currentQuiz);
  }, [currentTime]);

  return (
    <div>
      <Header title="Week 13 - Generative Models & Reinforcement Learning" subTitle="Jangwon Lee" />
      <VideoAndQuizSection>
        <VideoPlayerContainer>
          <VideoPlayer handleProgress={handleProgress} url={videoData.url} />
        </VideoPlayerContainer>
        <QuizContainer>
          <QuizBox
            quizData={currentQuiz}
            setQuizData={setCurrentQuiz}
            isAfterAnswer={isAfterAnswer}
            setIsAfterAnswer={setIsAfterAnswer}
          />
        </QuizContainer>
      </VideoAndQuizSection>
      <VideosSection>
        <div className="title">Videos </div>
        <div className="video-container">
          {dummyVideos.map((item, index) => (
            <div className="video-wrapper" key={index}>
              <VideoCard img={item.url} name={item.title} sub={item.uploader} />
            </div>
          ))}
        </div>
      </VideosSection>
    </div>
  );
}

const VideoAndQuizSection = styled.div`
  width: 100%;
  height: 100%;
  /* max-height: 720px; */
  display: flex;
  border-bottom: 1px solid rgba(108, 102, 133, 0.2);
`;

const VideoPlayerContainer = styled.div`
  width: 100%;
  min-width: 720px;
  /* height: 100%; */
  padding: 24px;
  background-color: #f5f5f5;
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
`;

const VideosSection = styled.div`
  width: 100%;
  padding: 24px;
  background-color: #fff;

  .title {
    color: #212121;
    font-family: CreatoDisplay;
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .video-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
    justify-items: center;
    grid-gap: 24px;

    .video-wrapper {
      width: 100%;
      cursor: pointer;
    }
  }
`;
