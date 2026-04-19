import { ErrorType } from "./ErrorTypes"

export interface AppError {
  type: ErrorType;
  message: string;
  statusCode?: number; // Optional because UI errors don't have HTTP codes
  context?: any;       // For validation details: { field: "email", reason: "taken" }
}