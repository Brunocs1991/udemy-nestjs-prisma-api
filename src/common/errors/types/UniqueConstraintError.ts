import { ConflictError } from './ConflictError';
import { PrismaClientError } from './PrismaClientError';

export class UniqueConstraintError extends ConflictError {
  constructor(e: PrismaClientError) {
    const uniqueField: string = e.meta.target;
    super(`A record with this ${uniqueField} already exists.`);
  }
}
