import VideoRepositoryImpl from '../repository/video';

class VideoUseCase {
  constructor(private readonly UserRepository: VideoRepositoryImpl) {}

  public async getVideo(id: string) {
    try {
      const data = await this.UserRepository.getVideo(id);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default VideoUseCase;
