import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { ApiForbiddenResponse } from '@nestjs/swagger';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiForbiddenResponse({ description: 'Acesso negado' })
  create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiForbiddenResponse({ description: 'Acesso negado' })
  findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiForbiddenResponse({ description: 'Acesso negado' })
  findOne(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  @ApiForbiddenResponse({ description: 'Acesso negado' })
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostEntity> {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  @ApiForbiddenResponse({ description: 'Acesso negado' })
  remove(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.remove(+id);
  }
}
