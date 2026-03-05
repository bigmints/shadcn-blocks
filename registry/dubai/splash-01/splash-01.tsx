"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { Loader2 } from "lucide-react";

export function Splash01() {
    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            <div className="flex-1 flex flex-col items-center justify-center gap-6">
                {/* App Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-2xl">V</span>
                </div>

                {/* App Name */}
                <h1 className="text-xl font-bold tracking-tight">Vortex</h1>

                {/* Circular Spinner */}
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
        </div>
    );
}
