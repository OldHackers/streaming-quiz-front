import { VideoRepository } from './../repository/video';

class VideoUseCase {
  constructor(private readonly VideoRepository: VideoRepository) {}

  public async getVideo(id: string) {
    try {
      const data = await this.VideoRepository.getVideo(id);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default VideoUseCase;
