// @/ui/policies/UIFailurePolicy.ts
import { AppError } from "@/models/types/AppError";
import { ErrorType } from "@/models/types/ErrorTypes";
import { UIFailureHandlers } from "@/models/types/UIFailureHandlers";

export class UIFailurePolicy {
  /**
   * Orchestrates the UI response to an error based on injected handlers.
   */
  static handle(error: AppError, handlers: UIFailureHandlers) {
    const { type, message, context } = error;

    switch (type) {
      case ErrorType.UNAUTHORIZED:
        handlers.notifyWarning("Session expired. Please log in again.");
        return //handlers.redirect("/login");

      case ErrorType.NETWORK_ERROR:
        return handlers.notifyWarning(
          "You are offline. Changes will sync once connection is restored."
        );

      case ErrorType.VALIDATION_ERROR:
        if (handlers.onValidationError) {
          return handlers.onValidationError(context);
        }
        return handlers.notifyError(message || "Please check your input.");

      case ErrorType.INTERNAL_ERROR:
        return handlers.notifyError("A server error occurred. Please try again later.");

      default:
        return handlers.notifyError(message || "An unexpected error occurred.");
    }
  }
}