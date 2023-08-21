import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepositoy } from './repositories/users.repositoy';
import { UserEntity } from './entities/user.entity';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepositoy) {}

  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersRepository.create(createUserDto);
  }

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.findAll();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user: UserEntity = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundError('Registro não encontrado');
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number): Promise<UserEntity> {
    return this.usersRepository.remove(id);
  }
}
