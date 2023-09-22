import ReactPlayer from 'react-player';
import styled from 'styled-components';

export default function VideoPlayer() {
  return (
    <PlayerWrapper>
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=YZ2gBai8xRA&pp=ygUGc2FtcGxl"
        width="100%"
        height="100%"
      />
    </PlayerWrapper>
  );
}

const PlayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 56.25%;
  background-color: rgba(247, 247, 248, 1);
  border-radius: 16px;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 16px;

    iframe {
      border-radius: 16px;
    }
  }
`;
