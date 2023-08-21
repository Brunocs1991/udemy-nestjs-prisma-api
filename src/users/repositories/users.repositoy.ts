import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersRepositoy {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.prisma.user.create({
      data: createUserDto,
      include: {
        posts: {
          select: {
            title: true,
            createdAt: true,
          },
        },
      },
    });
  }

  public async findAll(): Promise<UserEntity[]> {
    return this.prisma.user.findMany({
      include: {
        posts: {
          select: {
            title: true,
            createdAt: true,
          },
        },
      },
    });
  }

  public async findOne(id: number): Promise<UserEntity> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        posts: {
          select: {
            title: true,
            createdAt: true,
          },
        },
      },
    });
  }

  public async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      include: {
        posts: {
          select: {
            title: true,
            createdAt: true,
          },
        },
      },
    });
  }

  public async remove(id: number): Promise<UserEntity> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
