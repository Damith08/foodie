export interface CommonResponse<T> {
  message: string;
  success: boolean;
  data: T;
}
