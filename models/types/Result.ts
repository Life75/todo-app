// @/models/types/Result.ts
import { AppError } from "./AppError";
import { ErrorType } from "./ErrorTypes";

export type Result<T> = 
  | { success: true; data: T; error: null } 
  | { success: false; data: null; error: AppError };

export const ok = <T>(data: T): Result<T> => ({ 
  success: true, 
  data, 
  error: null 
});

export const fail = (
  type: ErrorType, 
  message: string, 
  statusCode?: number, 
  context?: any
): Result<any> => ({
  success: false,
  data: null,
  error: { type, message, statusCode, context }
});