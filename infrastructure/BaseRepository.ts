import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { Result, ok, fail } from '../models/Result';


export abstract class BaseRepository {
  protected api: AxiosInstance;

  constructor(baseURL: string = '/api') {
    this.api = axios.create({
      baseURL,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  /**
   * Strictly typed handleRequest.
   * T is the Expected Response Data shape.
   */
  protected async handleRequest<T>(
    request: Promise<AxiosResponse<T>>
  ): Promise<Result<T>> {
    try {
      const response = await request;
      // Because we typed the input, response.data is automatically T
      return ok(response.data);
    } catch (error) {
      let message = "Unknown API Error";

      // Use Axios's type guard for the catch block
      if (axios.isAxiosError(error)) {
        // Access typed error responses (assuming your API returns { message: string })
        const apiError = error.response?.data as { message?: string };
        message = apiError?.message || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      return fail(new Error(message));
    }
  }

  // Optimized Axios Wrappers
  protected get<T>(url: string, config?: AxiosRequestConfig) {
    return this.handleRequest<T>(this.api.get<T>(url, config));
  }

  protected post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.handleRequest<T>(this.api.post<T>(url, data, config));
  }

  protected put<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.handleRequest<T>(this.api.put<T>(url, data, config));
  }

  protected delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.handleRequest<T>(this.api.delete<T>(url, config));
  }
}