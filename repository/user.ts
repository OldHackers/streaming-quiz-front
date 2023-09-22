import { AxiosInstance } from 'axios';

export interface UserRepository {
  getUser(token: string): any;
}

class UserRepositoryImpl implements UserRepository {
  constructor(private readonly client: AxiosInstance) {}

  public async getUser(token: string) {
    const response = await this.client.get(`/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }
}

export default UserRepositoryImpl;
