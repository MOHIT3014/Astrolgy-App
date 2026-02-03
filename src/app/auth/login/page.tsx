"use client";

import { LoginForm } from "@/components/auth/loginForm";

export default function LoginPage() {
  // Function to handle login submission
  const handleLogin = (data: { email: string; password: string }) => {
    console.log("Login submitted:", data);
    // Here you can call your backend API or Twilio integration if needed
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}
