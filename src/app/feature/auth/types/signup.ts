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
