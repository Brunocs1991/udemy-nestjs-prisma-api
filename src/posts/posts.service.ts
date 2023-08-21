import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repositories/posts.repository';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(private readonly repository: PostsRepository) {}

  create(createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.repository.create(createPostDto);
  }

  findAll(): Promise<PostEntity[]> {
    return this.repository.findAll();
  }

  findOne(id: number): Promise<PostEntity> {
    return this.repository.findOne(id);
  }

  update(id: number, updatePostDto: UpdatePostDto): Promise<PostEntity> {
    return this.repository.update(id, updatePostDto);
  }

  remove(id: number): Promise<PostEntity> {
    return this.repository.remove(id);
  }
}
