import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import HomeTemplate from '../../components/templates/Home';
import { Video } from '../../entity/video';
import HttpClient from '../../network/httpClient';
import VideoRepositoryImpl from '../../repository/video';
import VideoUseCase from '../../usecase/video';
import Router, { useRouter } from 'next/router';
import { videoData } from '../../database/videos';

export default function Content({ video }: { video: Video }) {
  console.log(video);

  return <HomeTemplate videoData={video} />;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const id = context.params?.id;

  // const videoResponse = await new VideoUseCase(new VideoRepositoryImpl(HttpClient)).getVideo(
  //   id as string,
  // );
  // console.log(videoResponse);
  // const videoData = videoResponse?.data;

  const video = videoData[id as string];

  return {
    props: { video },
  };
};
