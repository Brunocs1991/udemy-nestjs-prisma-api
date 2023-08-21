import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({
    status: 409,
    description: 'Conflito de email',
    schema: {
      example: {
        statusCode: 409,
        message: ['email must ne a email'],
        error: 'Conflit',
      },
    },
  })
  @ApiForbiddenResponse({ description: 'Acesso negado' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiForbiddenResponse({ description: 'Acesso negado' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiForbiddenResponse({ description: 'Acesso negado' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiForbiddenResponse({ description: 'Acesso negado' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiForbiddenResponse({ description: 'Acesso negado' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
