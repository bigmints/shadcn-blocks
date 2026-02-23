"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { ChevronLeft, CreditCard, Lock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function Payment01() {
    const [cardNumber, setCardNumber] = useState("4242 4242 4242 ");
    const [cardError, setCardError] = useState("");

    const formatCardNumber = (value: string) => {
        const digits = value.replace(/\D/g, "");
        const formatted = digits.replace(/(\d{4})/g, "$1 ").trim();
        return formatted.substring(0, 19);
    };

    const detectBrand = (num: string): string => {
        const d = num.replace(/\s/g, "");
        if (d.startsWith("4")) return "Visa";
        if (d.startsWith("5") || d.startsWith("2")) return "Mastercard";
        if (d.startsWith("3")) return "Amex";
        return "";
    };

    const brand = detectBrand(cardNumber);

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="flex items-center gap-3 px-4 pt-2 pb-3 border-b">
                <button className="p-2 -ml-2 rounded-lg hover:bg-muted transition-colors">
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <h1 className="font-semibold">Add Payment</h1>
                <div className="flex-1" />
                <Lock className="h-4 w-4 text-muted-foreground" />
            </div>

            <ScrollArea className="flex-1">
                <div className="px-6 py-6 space-y-5">
                    {/* Card Preview */}
                    <div className="relative h-48 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 p-6 text-white overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <CreditCard className="h-8 w-8 text-white/60" />
                                <span className="text-sm font-medium text-white/80">{brand || "Card"}</span>
                            </div>
                            <div>
                                <p className="font-mono text-lg tracking-[0.2em]">
                                    {cardNumber || "•••• •••• •••• ••••"}
                                </p>
                                <div className="flex justify-between mt-3">
                                    <div>
                                        <p className="text-[10px] text-white/50 uppercase">Card Holder</p>
                                        <p className="text-xs font-medium">Khalid Al Maktoum</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/50 uppercase">Expires</p>
                                        <p className="text-xs font-medium">12/28</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Card Number</Label>
                            <div className="relative">
                                <Input
                                    value={cardNumber}
                                    onChange={(e) => {
                                        setCardNumber(formatCardNumber(e.target.value));
                                        setCardError("");
                                    }}
                                    placeholder="0000 0000 0000 0000"
                                    className={`h-11 font-mono pr-16 ${cardError ? "border-destructive" : ""}`}
                                    maxLength={19}
                                />
                                {brand && (
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground">
                                        {brand}
                                    </span>
                                )}
                            </div>
                            {cardError && <p className="text-xs text-destructive">{cardError}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Expiry Date</Label>
                                <Input placeholder="MM/YY" className="h-11" defaultValue="12/28" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">CVV</Label>
                                <Input type="password" placeholder="•••" className="h-11" maxLength={4} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Cardholder Name</Label>
                            <Input placeholder="Name on card" className="h-11" defaultValue="Khalid Al Maktoum" />
                        </div>

                        <Separator />

                        <div className="flex items-center gap-2">
                            <Checkbox id="save-card" defaultChecked />
                            <Label htmlFor="save-card" className="text-sm text-muted-foreground font-normal cursor-pointer">
                                Save card for future purchases
                            </Label>
                        </div>
                    </div>
                </div>
            </ScrollArea>

            {/* Pay Button */}
            <div className="border-t px-6 py-4 pb-8">
                <Button className="w-full h-12 font-semibold text-base gap-2">
                    <Lock className="h-4 w-4" />
                    Pay AED 918
                </Button>
                <p className="text-[10px] text-muted-foreground text-center mt-2">
                    Secured by 256-bit SSL encryption
                </p>
            </div>
        </div>
    );
}
