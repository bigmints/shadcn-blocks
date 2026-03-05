"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { ChevronRight, Layers, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
    {
        icon: Layers,
        title: "Beautiful Components",
        description: "Production-ready mobile UI blocks built with shadcn/ui. Copy, paste, and ship.",
    },
    {
        icon: ShieldCheck,
        title: "9 City Themes",
        description: "Switch between Dubai, New York, London, and more — each with its own color palette.",
    },
    {
        icon: Zap,
        title: "Ready to Go",
        description: "Install with the CLI, customize to fit your brand, and deploy in minutes.",
    },
];

export function Onboarding01() {
    const [current, setCurrent] = useState(0);
    const slide = slides[current];
    const Icon = slide.icon;
    const isLast = current === slides.length - 1;

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Image / Illustration area */}
            <div className="flex-1 flex items-center justify-center bg-muted/40">
                <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-12 w-12 text-primary" strokeWidth={1.5} />
                </div>
            </div>

            {/* Content area */}
            <div className="px-6 pt-8 pb-10 space-y-6 flex flex-col items-center text-center">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">{slide.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {slide.description}
                    </p>
                </div>

                {/* Page indicator */}
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-200 ${i === current
                                ? "w-6 bg-primary"
                                : "w-1.5 bg-muted-foreground/20"
                                }`}
                        />
                    ))}
                </div>

                {/* Action */}
                <Button
                    className="w-full h-12 font-medium"
                    onClick={() => {
                        if (!isLast) setCurrent((s) => s + 1);
                    }}
                >
                    {isLast ? "Get Started" : "Continue"}
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
