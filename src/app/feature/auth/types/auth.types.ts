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

export interface ISignupRequest {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  address: string;
  contact: string;
}

export interface ISignupResponse {
  token: string;
}
