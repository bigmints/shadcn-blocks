"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { Fingerprint, Delete } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function Login03() {
    const [pin, setPin] = useState("");
    const [useBiometric, setUseBiometric] = useState(true);

    const handleKeyPress = (digit: string) => {
        if (pin.length < 4) {
            setPin(pin + digit);
        }
    };

    const handleDelete = () => {
        setPin(pin.slice(0, -1));
    };

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            <div className="flex-1 flex flex-col items-center px-6 pt-12">
                {/* Avatar & Greeting */}
                <Avatar className="h-20 w-20 mb-4">
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-semibold">
                        JD
                    </AvatarFallback>
                </Avatar>
                <h1 className="text-lg font-semibold">Welcome back, John</h1>
                <p className="text-sm text-muted-foreground mt-1">Enter your PIN to continue</p>

                {/* PIN Dots */}
                <div className="flex gap-4 mt-8 mb-2">
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={`w-4 h-4 rounded-full transition-all duration-200 ${i < pin.length
                                    ? "bg-primary scale-110"
                                    : "border-2 border-muted-foreground/30"
                                }`}
                        />
                    ))}
                </div>

                {pin.length === 4 && (
                    <p className="text-xs text-destructive mt-2 animate-in fade-in">Incorrect PIN. Try again.</p>
                )}

                {/* Biometric Toggle */}
                <div className="flex items-center gap-3 mt-6 mb-2">
                    <Fingerprint className="h-5 w-5 text-muted-foreground" />
                    <Label htmlFor="biometric" className="text-sm text-muted-foreground cursor-pointer">
                        Use Face ID
                    </Label>
                    <Switch id="biometric" checked={useBiometric} onCheckedChange={setUseBiometric} />
                </div>
            </div>

            {/* PIN Pad */}
            <div className="px-12 pb-10">
                <div className="grid grid-cols-3 gap-4">
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"].map((key) => (
                        <button
                            key={key}
                            onClick={() => {
                                if (key === "del") handleDelete();
                                else if (key !== "") handleKeyPress(key);
                            }}
                            className={`h-16 rounded-2xl flex items-center justify-center text-xl font-medium transition-all active:scale-95 ${key === ""
                                    ? "invisible"
                                    : key === "del"
                                        ? "text-muted-foreground hover:bg-muted"
                                        : "bg-muted/60 hover:bg-muted active:bg-muted"
                                }`}
                        >
                            {key === "del" ? (
                                <Delete className="h-5 w-5" />
                            ) : (
                                key
                            )}
                        </button>
                    ))}
                </div>

                <button className="w-full text-center mt-4 text-sm text-muted-foreground hover:text-primary transition-colors">
                    Forgot PIN?
                </button>
            </div>
        </div>
    );
}
