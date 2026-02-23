"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { WifiOff, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Error02() {
    const [loading, setLoading] = useState(false);

    const handleRetry = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            <div className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
                {/* Icon */}
                <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full bg-destructive/10 flex items-center justify-center">
                        <WifiOff className="h-10 w-10 text-destructive/60" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-destructive/20 animate-spin" style={{ animationDuration: '8s' }} />
                </div>

                {/* Text */}
                <h2 className="text-xl font-bold text-center">No Connection</h2>
                <p className="text-sm text-muted-foreground text-center mt-2 leading-relaxed max-w-[260px]">
                    Please check your internet connection and try again. Your data is safe.
                </p>

                {/* Retry Button */}
                <Button
                    className="mt-8 h-11 px-8 font-medium gap-2"
                    onClick={handleRetry}
                    disabled={loading}
                >
                    <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                    {loading ? "Retrying..." : "Try Again"}
                </Button>

                {/* Secondary actions */}
                <div className="flex gap-4 mt-4">
                    <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                        Help Center
                    </button>
                    <span className="text-xs text-muted-foreground">·</span>
                    <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                        Report Issue
                    </button>
                </div>
            </div>
        </div>
    );
}
