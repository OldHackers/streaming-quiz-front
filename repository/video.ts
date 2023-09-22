import { AxiosInstance } from 'axios';

export interface VideoRepository {
  getVideo(id: string): any;
}

class VideoRepositoryImpl implements VideoRepository {
  constructor(private readonly client: AxiosInstance) {}

  public async getVideo(id: string) {
    const response = await this.client.get(`/video/${id}`);

    return response;
  }
}

export default VideoRepositoryImpl;
