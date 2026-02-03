"use client";

import { SignupForm } from "@/components/auth/signupForm";

export default function SignupPage() {
  // Function to handle signup submission
  const handleSignup = (data: {
    name: string;
    email: string;
    password: string;
    otp?: string;
  }) => {
    console.log("Signup submitted:", data);
    // Here you can call your backend API or Twilio OTP integration
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <SignupForm onSubmit={handleSignup} />
    </div>
  );
}
