import { UserRepository } from '../repository/user';

class UserUseCase {
  constructor(private readonly UserRepository: UserRepository) {}

  public async getUser(token: string) {
    try {
      const data = await this.UserRepository.getUser(token);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default UserUseCase;
