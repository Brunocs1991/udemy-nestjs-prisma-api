import { Post } from '@prisma/client';

export class PostEntity implements Post {
  authorId: number;
  content: string;
  createdAt: Date;
  id: number;
  published: boolean;
  title: string;
  updatedAt: Date;
}
