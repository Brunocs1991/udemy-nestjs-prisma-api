import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepositoy } from './repositories/users.repositoy';
import { UserEntity } from './entities/user.entity';
import { UnauthorizedError } from '../common/errors/types/UnauthorizedError';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepositoy) {}

  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersRepository.create(createUserDto);
  }

  findAll(): Promise<UserEntity[]> {
    throw new UnauthorizedError('Não autorizado');
    // Todo return this.usersRepository.findAll();
  }

  findOne(id: number): Promise<UserEntity> {
    return this.usersRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number): Promise<UserEntity> {
    return this.usersRepository.remove(id);
  }
}
