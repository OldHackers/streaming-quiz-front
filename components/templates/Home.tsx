import styled from 'styled-components';
import Header from '../organisms/Header';
import VideoPlayer from '../organisms/VideoPlayer';
import Quiz from '../organisms/Quiz';
import VideoCard from '../organisms/VideoCard';

export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <VideoAndQuizSection>
        <VideoPlayerContainer>
          <VideoPlayer />
        </VideoPlayerContainer>
        <QuizContainer>
          <Quiz />
        </QuizContainer>
      </VideoAndQuizSection>
      <VideosSection>
        <div className="title">Videos </div>
        <div className="video-container">
          <div className="video-wrapper">
            <VideoCard />
          </div>
          <div className="video-wrapper">
            <VideoCard />
          </div>
          <div className="video-wrapper">
            <VideoCard />
          </div>
          <div className="video-wrapper">
            <VideoCard />
          </div>
          <div className="video-wrapper">
            <VideoCard />
          </div>
          <div className="video-wrapper">
            <VideoCard />
          </div>
        </div>
      </VideosSection>
    </div>
  );
}

const VideoAndQuizSection = styled.div`
  width: 100%;
  height: 100%;
  max-height: 720px;
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

  .title {
    color: #212121;
    font-family: CreatoDisplay;
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .video-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .video-wrapper {
      cursor: pointer;
      margin: 0 12px 24px 0;
    }
  }
`;
