// auth types
export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  otp?: string;
}

export interface OTPStepProps {
  email: string;
  onVerify: (otp: string) => void;
}
