export enum ErrorType {
  // --- Auth & Access ---
  UNAUTHORIZED = 'AUTH_UNAUTHORIZED',       // Not logged in
  FORBIDDEN = 'AUTH_FORBIDDEN',             // Logged in, but no permission
  TOKEN_EXPIRED = 'AUTH_TOKEN_EXPIRED',

  // --- Client Side / Validation ---
  BAD_REQUEST = 'CLIENT_BAD_REQUEST',       // Generic 400
  VALIDATION_ERROR = 'CLIENT_VALIDATION',   // Form field errors
  NOT_FOUND = 'CLIENT_NOT_FOUND',           // 404
  CONFLICT = 'CLIENT_CONFLICT',             // Resource already exists

  // --- Server / Infrastructure ---
  INTERNAL_ERROR = 'SERVER_INTERNAL_ERROR', // 500
  SERVICE_UNAVAILABLE = 'SERVER_UNAVAILABLE', 
  GATEWAY_TIMEOUT = 'SERVER_TIMEOUT',

  // --- Network / UI Specific ---
  NETWORK_ERROR = 'UI_NETWORK_OFFLINE',     // Physical connection lost
  REQUEST_CANCELLED = 'UI_REQUEST_ABORTED', // User navigated away
  UNKNOWN_ERROR = 'UNKNOWN',

  DATABASE_ERROR = "DATABASE_ERROR"
}