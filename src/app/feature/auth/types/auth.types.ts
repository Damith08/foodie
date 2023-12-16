export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}
export interface IEmailCheckRequest {
  email: string;
}
