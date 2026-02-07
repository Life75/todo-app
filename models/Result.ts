// Define the structure for Success and Failure
export type Success<T> = {
  ok: true;
  value: T;
};

export type Failure<E> = {
  ok: false;
  error: E;
};

// The Result type is a Union of the two
export type Result<T, E = Error> = Success<T> | Failure<E>;

/**
 * Utility functions to create Result objects easily
 */
export const ok = <T>(value: T): Success<T> => ({
  ok: true,
  value,
});

export const fail = <E>(error: E): Failure<E> => ({
  ok: false,
  error,
});