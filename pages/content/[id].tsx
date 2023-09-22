import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import HomeTemplate from '../../components/templates/Home';
import { Video } from '../../entity/video';
import HttpClient from '../../network/httpClient';
import VideoRepositoryImpl from '../../repository/video';
import VideoUseCase from '../../usecase/video';

export default function Content({ videoData }: { videoData: Video }) {
  console.log(videoData);

  return <HomeTemplate videoData={videoData} />;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const id = context.params?.id;

  const videoResponse = await new VideoUseCase(new VideoRepositoryImpl(HttpClient)).getVideo(
    id as string,
  );
  console.log(videoResponse);
  const videoData = videoResponse?.data;

  return {
    props: { videoData },
  };
};
