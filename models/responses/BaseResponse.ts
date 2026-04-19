// @/models/responses/BaseResponse.ts
import { AppError } from "../types/AppError";

export interface BaseResponse<T> {
  success: boolean;
  data: T | null;
  error: AppError | null; 
}