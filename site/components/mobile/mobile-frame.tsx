"use client";

import React from "react";

interface MobileFrameProps {
    slug: string;
    className?: string;
    theme?: "dubai" | "new-york";
}

export function MobileFrame({ slug, className, theme = "dubai" }: MobileFrameProps) {
    return (
        <div className={`relative ${className ?? ""}`} style={{ width: 375, aspectRatio: "375/812" }}>
            {/* Phone bezel */}
            <div className="absolute inset-0 rounded-[3rem] border-[8px] border-zinc-900 pointer-events-none z-10 shadow-2xl" />

            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-zinc-900 rounded-full z-20" />

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
                <div className="w-32 h-1 bg-zinc-900 rounded-full" />
            </div>

            {/* iframe content */}
            <iframe
                src={`/${theme}/preview/${slug}`}
                className="absolute inset-[10px] w-[calc(100%-20px)] h-[calc(100%-20px)] rounded-[2.1rem] bg-background overflow-hidden"
                style={{ border: "none" }}
                title="Block preview"
            />
        </div>
    );
}

