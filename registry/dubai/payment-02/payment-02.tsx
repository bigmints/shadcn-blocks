"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { ChevronLeft, Plus, Check, CreditCard } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const savedCards = [
    { id: "visa", brand: "Visa", last4: "4242", expiry: "12/28", isDefault: true },
    { id: "mc", brand: "Mastercard", last4: "8910", expiry: "06/27", isDefault: false },
    { id: "amex", brand: "Amex", last4: "3782", expiry: "09/26", isDefault: false },
];

const brandColors: Record<string, string> = {
    Visa: "from-blue-600 to-blue-800",
    Mastercard: "from-red-500 to-orange-500",
    Amex: "from-zinc-600 to-zinc-800",
};

export function Payment02() {
    const [selected, setSelected] = useState("visa");

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="flex items-center gap-3 px-4 pt-2 pb-3 border-b">
                <button className="p-2 -ml-2 rounded-lg hover:bg-muted transition-colors">
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <h1 className="font-semibold">Payment Method</h1>
            </div>

            <ScrollArea className="flex-1">
                <div className="px-5 py-5 space-y-5">
                    {/* Saved Cards */}
                    <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Saved Cards</p>
                        <div className="space-y-2.5">
                            {savedCards.map((card) => (
                                <button
                                    key={card.id}
                                    onClick={() => setSelected(card.id)}
                                    className={`w-full flex items-center gap-3.5 p-3.5 rounded-xl border transition-all ${selected === card.id
                                            ? "border-primary bg-primary/[0.03] ring-1 ring-primary/20"
                                            : "hover:bg-muted/50"
                                        }`}
                                >
                                    {/* Card Icon */}
                                    <div className={`w-12 h-8 rounded-md bg-gradient-to-br ${brandColors[card.brand]} flex items-center justify-center shrink-0`}>
                                        <CreditCard className="h-4 w-4 text-white" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-medium">{card.brand} •••• {card.last4}</p>
                                            {card.isDefault && (
                                                <Badge variant="secondary" className="text-[9px] px-1.5 py-0 rounded-full">Default</Badge>
                                            )}
                                        </div>
                                        <p className="text-xs text-muted-foreground">Expires {card.expiry}</p>
                                    </div>
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected === card.id ? "border-primary bg-primary" : "border-muted-foreground/30"
                                        }`}>
                                        {selected === card.id && <Check className="h-3 w-3 text-primary-foreground" />}
                                    </div>
                                </button>
                            ))}

                            {/* Add New Card */}
                            <button className="w-full flex items-center gap-3.5 p-3.5 rounded-xl border border-dashed hover:bg-muted/50 transition-colors">
                                <div className="w-12 h-8 rounded-md bg-muted flex items-center justify-center">
                                    <Plus className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <p className="text-sm font-medium text-muted-foreground">Add New Card</p>
                            </button>
                        </div>
                    </div>

                    <Separator />

                    {/* Digital Wallets */}
                    <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Digital Wallets</p>
                        <div className="space-y-2">
                            <Button variant="outline" className="w-full h-12 font-medium gap-2">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" /></svg>
                                Apple Pay
                            </Button>
                            <Button variant="outline" className="w-full h-12 font-medium gap-2">
                                <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                Google Pay
                            </Button>
                        </div>
                    </div>

                    <Separator />

                    {/* Order Summary */}
                    <div className="rounded-xl border p-4 space-y-2.5">
                        <h3 className="text-sm font-semibold mb-1">Order Summary</h3>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>AED 752</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Shipping</span>
                            <span className="text-emerald-600 font-medium">Free</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Tax</span>
                            <span>AED 68</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                            <span className="font-semibold">Total</span>
                            <span className="font-bold text-lg">AED 820</span>
                        </div>
                    </div>
                </div>
            </ScrollArea>

            {/* Pay Now */}
            <div className="border-t px-5 py-4 pb-8">
                <Button className="w-full h-12 font-semibold text-base">
                    Pay AED 820
                </Button>
            </div>
        </div>
    );
}
