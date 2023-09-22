import styled from 'styled-components';

export default function VideoCard() {
  return (
    <VideoCardWrapper>
      <div className="thumbnail"></div>
      <div className="content">
        <div className="avatar">A</div>
        <div className="info">
          <div className="name">Video name sample</div>
          <div className="sub">Sunq</div>
        </div>
      </div>
    </VideoCardWrapper>
  );
}

const VideoCardWrapper = styled.div`
  width: 248px;
  height: 224px;
  border-radius: 16px;
  border: 1px solid rgba(108, 102, 133, 0.2);
  background-color: #f5f5f5;
  position: relative;

  .thumbnail {
    width: 100%;
    height: 162px;
    border-radius: 16px 16px 0px 0px;
    position: relative;
    background-color: #f5f5f5;
  }

  .content {
    height: 62px;
    width: 100%;
    background-color: #fff;
    border-radius: 0 0 16px 16px;
    position: absolute;
    bottom: 0;
    display: flex;
    padding: 12px;

    .avatar {
      position: relative;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: rgba(237, 120, 94, 0.2);
      color: #ed785e;
      font-family: CreatoDisplay;
      font-size: 18.286px;
      font-style: normal;
      font-weight: 500;
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      height: 32px;
      .name {
        color: #6c6685;
        font-family: CreatoDisplay;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }

      .sub {
        color: #6c6685;
        text-align: center;
        font-family: CreatoDisplay;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }
`;
