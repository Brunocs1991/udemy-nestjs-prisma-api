import { PrismaClientError } from '../types/PrismaClientError';
import { UniqueConstraintError } from '../types/UniqueConstraintError';
import { DataBaseError } from '../types/DataBaseError';

enum PrismaErrors {
  UniqyeConstraintFail = 'P2002',
  ConnectionDatabase = 'P1001',
}

export const handleDatabaseError = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqyeConstraintFail:
      return new UniqueConstraintError(e);
    case PrismaErrors.ConnectionDatabase:
      return new DataBaseError(e.message);
    default:
      return new DataBaseError(e.message);
  }
};
