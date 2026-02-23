"use client";

import { Signal, Wifi, Battery } from "lucide-react";

export function StatusBar() {
    return (
        <div className="flex items-center justify-between px-6 pt-3 pb-1">
            <span className="text-sm font-semibold">9:41</span>
            <div className="flex items-center gap-1.5">
                <Signal className="h-3.5 w-3.5" />
                <Wifi className="h-3.5 w-3.5" />
                <Battery className="h-3.5 w-3.5" />
            </div>
        </div>
    );
}
