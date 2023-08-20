import { User } from '@prisma/client';

export class UserEntity implements User {
  admin: boolean;
  createdAt: Date;
  email: string;
  id: number;
  name: string;
}
