"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { Check, Copy, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Confirmation01() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
                {/* Animated Checkmark */}
                <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center animate-in zoom-in-50 duration-500">
                            <Check className="h-8 w-8 text-white stroke-[3]" />
                        </div>
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping" style={{ animationDuration: '2s' }} />
                </div>

                <h1 className="text-2xl font-bold text-center">Payment Successful!</h1>
                <p className="text-sm text-muted-foreground text-center mt-2">
                    Your payment has been processed successfully
                </p>

                {/* Amount */}
                <div className="mt-6 text-center">
                    <p className="text-4xl font-bold tracking-tight">$249.99</p>
                    <p className="text-xs text-muted-foreground mt-1">Paid to Acme Store</p>
                </div>

                {/* Details */}
                <div className="w-full mt-8 rounded-xl border p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Transaction ID</span>
                        <div className="flex items-center gap-1.5">
                            <span className="font-mono text-xs font-medium">TXN-8F2K9L</span>
                            <button onClick={handleCopy} className="text-muted-foreground hover:text-foreground transition-colors">
                                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                            </button>
                        </div>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-medium">Feb 23, 2026</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Method</span>
                        <span className="font-medium">•••• 4242</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Status</span>
                        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Completed</span>
                    </div>
                </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-6 pb-8 space-y-3">
                <Button className="w-full h-11 font-medium">
                    Done
                </Button>
                <Button variant="outline" className="w-full h-11 gap-2">
                    <Share2 className="h-4 w-4" />
                    Share Receipt
                </Button>
            </div>
        </div>
    );
}
