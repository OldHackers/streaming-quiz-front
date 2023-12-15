import styled from 'styled-components';
import Hamburger from '../../public/svg/hamburger.svg';
import Download from '../../public/svg/download.svg';
import Search from '../../public/svg/search.svg';
import Alarm from '../../public/svg/alarm.svg';

interface Props {
  title?: string;
  subTitle?: string;
}

export default function Header({ title, subTitle }: Props) {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <div className="left-container">
          <HamburgerIcon />
        </div>
        <div className="center-container">
          <div className="title">{title}</div>
          <div className="sub-title">{subTitle}</div>
        </div>
        <div className="right-container">
          <DownloadIcon />
          <SearchIcon />
          <AlarmIcon />
        </div>
      </HeaderContent>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 96px;
  background-color: #1b1d25;
  border-bottom: 2px solid rgba(249, 248, 252, 0.2);
  /* background-color: #fff;
  border-bottom: 2px solid rgba(108, 102, 133, 0.2); */
  z-index: 50;
`;

const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  padding: 0 20px;

  .left-container {
    padding: 0 20px;
    width: 90px;
  }

  .center-container {
    width: 100%;
    .title {
      /* color: #212121; */
      color: #fefefe;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 4px;
    }

    .sub-title {
      color: #6c6685;
      font-family: Inter;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
    }
  }

  .right-container {
    min-width: 180px;
    display: flex;
    justify-content: center;
  }
`;

const HamburgerIcon = styled(Hamburger)`
  width: 24px;
  height: 24px;
`;

const DownloadIcon = styled(Download)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;

const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;

const AlarmIcon = styled(Alarm)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;
