import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UsersRepositoy } from './repositories/users.repositoy';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UsersRepositoy],
})
export class UsersModule {}
