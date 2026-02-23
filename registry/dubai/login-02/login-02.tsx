"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login02() {
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(30);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (step === "otp" && timer > 0) {
            const interval = setInterval(() => setTimer((t) => t - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [step, timer]);

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="flex items-center px-4 pt-2 pb-3">
                <button
                    className="p-2 -ml-2 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => step === "otp" ? setStep("phone") : undefined}
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
            </div>

            <div className="flex-1 flex flex-col px-6">
                {step === "phone" ? (
                    <>
                        {/* Phone Step */}
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold tracking-tight">Enter your phone</h1>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                We&apos;ll send you a verification code to confirm your identity.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Phone Number</Label>
                                <div className="flex gap-2">
                                    <Button variant="outline" className="h-11 px-3 gap-1.5 shrink-0 w-24">
                                        <span className="text-base">🇺🇸</span>
                                        <span className="text-sm">+1</span>
                                        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                                    </Button>
                                    <Input
                                        type="tel"
                                        placeholder="04 000-0000"
                                        className="h-11 flex-1"
                                    />
                                </div>
                            </div>

                            <p className="text-xs text-muted-foreground leading-relaxed">
                                By continuing, you agree to our{" "}
                                <button className="text-primary hover:underline">Terms of Service</button>
                                {" "}and{" "}
                                <button className="text-primary hover:underline">Privacy Policy</button>.
                            </p>
                        </div>

                        <div className="mt-auto pb-10">
                            <Button
                                className="w-full h-11 font-medium"
                                onClick={() => { setStep("otp"); setTimer(30); }}
                            >
                                Send Verification Code
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        {/* OTP Step */}
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold tracking-tight">Verify your phone</h1>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                Enter the 6-digit code sent to <span className="font-medium text-foreground">+971 04 000-0000</span>
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* OTP Inputs */}
                            <div className="flex gap-2.5 justify-center">
                                {otp.map((digit, i) => (
                                    <input
                                        key={i}
                                        ref={(el) => { inputRefs.current[i] = el; }}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(i, e.target.value)}
                                        onKeyDown={(e) => handleOtpKeyDown(i, e)}
                                        className="w-12 h-14 text-center text-xl font-semibold border rounded-xl bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                ))}
                            </div>

                            {/* Resend Timer */}
                            <div className="text-center">
                                {timer > 0 ? (
                                    <p className="text-sm text-muted-foreground">
                                        Resend code in <span className="font-medium text-foreground">{timer}s</span>
                                    </p>
                                ) : (
                                    <button
                                        className="text-sm text-primary font-medium hover:underline"
                                        onClick={() => setTimer(30)}
                                    >
                                        Resend Code
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="mt-auto pb-10">
                            <Button className="w-full h-11 font-medium">
                                Verify & Continue
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
