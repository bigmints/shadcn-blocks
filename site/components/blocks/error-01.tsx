"use client";

import { StatusBar } from "@/components/mobile/status-bar";
import { Search, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Error01() {
    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            <div className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
                {/* Illustration */}
                <div className="relative mb-8">
                    <div className="w-28 h-28 rounded-3xl bg-muted flex items-center justify-center">
                        <Inbox className="h-14 w-14 text-muted-foreground/30" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Search className="h-5 w-5 text-primary/40" />
                    </div>
                </div>

                {/* Text */}
                <h2 className="text-xl font-bold text-center">Nothing here yet</h2>
                <p className="text-sm text-muted-foreground text-center mt-2 leading-relaxed max-w-[280px]">
                    We couldn&apos;t find what you&apos;re looking for. Try adjusting your search or explore our categories.
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-8 w-full max-w-[260px]">
                    <Button className="w-full h-11 font-medium">
                        Browse Categories
                    </Button>
                    <Button variant="outline" className="w-full h-11">
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
