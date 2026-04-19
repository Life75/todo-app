export interface UIFailureHandlers {
  notifyError: (msg: string) => void;
  notifyWarning: (msg: string) => void;
  redirect: (path: string) => void;
  onValidationError?: (context: any) => void;
}
