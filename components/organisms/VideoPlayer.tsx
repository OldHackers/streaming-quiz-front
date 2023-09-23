import dynamic from 'next/dynamic';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface Props {
  handleProgress: (state: any) => void;
  url: string;
}

export default function VideoPlayer({ handleProgress, url }: Props) {
  return (
    <PlayerWrapper>
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls
        onProgress={handleProgress}
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
