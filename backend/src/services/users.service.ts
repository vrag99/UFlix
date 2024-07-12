import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@/exceptions/HttpException';
import { User } from '@interfaces/users.interface';

@Service()
export class UserService {
  public user = new PrismaClient().user;

  public async findAllUser(): Promise<User[]> {
    const allUser: User[] = await this.user.findMany();
    return allUser;
  }

  public async findUserById(userId: number): Promise<User> {
    const findUser: User = await this.user.findUnique({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    const findUser: User = await this.user.findUnique({ where: { email: userData.email } });
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const createUserData: User = await this.user.create({ data: { ...userData} });
    return createUserData;
  }

  public async updateUser(userId: number, userData: CreateUserDto): Promise<User> {
    const findUser: User = await this.user.findUnique({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "User doesn't exist");
    const updateUserData = await this.user.update({ where: { id: userId }, data: { ...userData } });
    return updateUserData;
  }

  public async deleteUser() {
    const deleteUserData = await this.user.deleteMany();
  }
}
