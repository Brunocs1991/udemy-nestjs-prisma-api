import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { isPrismaError } from '../utils/is-prisma-error.util';
import { handleDatabaseError } from '../utils/handle-database-error.util';
import { DataBaseError } from '../types/DataBaseError';

@Injectable()
export class DatabaseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        if (isPrismaError(error)) {
          error = handleDatabaseError(error);
        }
        if (error instanceof DataBaseError) {
          throw new BadRequestException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
