export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export type AuthUser = {
  userId: number;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string | null;
  aadhaarNumber: string | null;
  pincode: number | null;
};

export type AuthResponse = {
  user: AuthUser;
  tokens: Tokens;
};
