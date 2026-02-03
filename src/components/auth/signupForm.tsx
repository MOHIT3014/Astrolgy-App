"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, User, Key } from "lucide-react";
import { motion } from "framer-motion";
import { SignupData } from "@/types/index";
import { OTPStep } from "@/components/auth/otpForm";

interface Props {
  onSubmit: (data: SignupData) => void;
}

export const SignupForm: React.FC<Props> = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [signupData, setSignupData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
  });

  const handleNext = () => setStep(step + 1);

  const handleOTPVerify = (otp: string) => {
    setSignupData({ ...signupData, otp });
    onSubmit({ ...signupData, otp });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-md mx-auto mt-20"
    >
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <Label>Name</Label>
                <div className="relative">
                  <Input
                    placeholder="Your name"
                    value={signupData.name}
                    onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    className="pl-10"
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              <div>
                <Label>Email</Label>
                <div className="relative">
                  <Input
                    placeholder="example@mail.com"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    className="pl-10"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              <div>
                <Label>Password</Label>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Your password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    className="pl-10"
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              <Button className="w-full mt-2" onClick={handleNext}>
                Next
              </Button>
            </>
          )}

          {step === 2 && (
            <OTPStep email={signupData.email} onVerify={handleOTPVerify} />
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
