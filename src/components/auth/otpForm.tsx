"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";

import { OTPStepProps } from "@/types/index";

export const OTPStep: React.FC<OTPStepProps> = ({ email, onVerify }) => {
  const [otp, setOtp] = useState("");

  return (
    <div className="space-y-4">
      <Label>Enter OTP sent to {email}</Label>
      <div className="relative">
        <Input
          placeholder="123456"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="pl-10"
        />
        <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      </div>
      <Button className="w-full" onClick={() => onVerify(otp)}>
        Verify OTP
      </Button>
    </div>
  );
};
