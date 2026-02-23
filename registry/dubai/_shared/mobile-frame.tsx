"use client";

import React from "react";

interface MobileFrameProps {
    children: React.ReactNode;
    className?: string;
}

export function MobileFrame({ children, className }: MobileFrameProps) {
    return (
        <div
            className={`relative mx-auto w-[390px] h-[844px] bg-background rounded-[3rem] border-[8px] border-zinc-900 shadow-2xl overflow-hidden flex flex-col ${className ?? ""}`}
        >
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-zinc-900 rounded-full z-50" />
            {/* Screen content */}
            <div className="flex-1 flex flex-col overflow-hidden pt-1">
                {children}
            </div>
            {/* Home indicator */}
            <div className="flex justify-center pb-2">
                <div className="w-32 h-1 bg-zinc-900 rounded-full" />
            </div>
        </div>
    );
}
