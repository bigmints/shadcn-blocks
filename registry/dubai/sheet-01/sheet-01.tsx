"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { MapPin, Navigation, Phone, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const places = [
    { name: "Blue Bottle Coffee", type: "Café", distance: "0.2 mi", rating: "4.8" },
    { name: "Whole Foods Market", type: "Grocery", distance: "0.5 mi", rating: "4.5" },
    { name: "Central Park", type: "Park", distance: "0.8 mi", rating: "4.9" },
];

export function Sheet01() {
    const [sheetState, setSheetState] = useState<"peek" | "half" | "full">("half");

    const sheetHeight = { peek: "h-[160px]", half: "h-[55%]", full: "h-[85%]" };

    const cycleState = () => {
        const next = { peek: "half", half: "full", full: "peek" } as const;
        setSheetState(next[sheetState]);
    };

    return (
        <div className="flex flex-col h-full bg-muted/30 relative overflow-hidden">
            <StatusBar />

            {/* Placeholder content behind sheet */}
            <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mx-auto mb-2 opacity-30" />
                    <p className="text-sm opacity-50">App content behind sheet</p>
                </div>
            </div>

            {/* Bottom Sheet */}
            <div className={`absolute bottom-0 left-0 right-0 bg-background rounded-t-3xl shadow-[0_-4px_30px_rgb(0,0,0,0.08)] transition-all duration-300 ease-out flex flex-col ${sheetHeight[sheetState]}`}>
                {/* Drag Handle */}
                <button onClick={cycleState} className="flex justify-center pt-3 pb-2">
                    <div className="w-10 h-1 bg-muted-foreground/20 rounded-full" />
                </button>

                {/* Header */}
                <div className="px-5 pb-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-bold">Blue Bottle Coffee</h2>
                            <p className="text-xs text-muted-foreground mt-0.5">Café · 0.2 mi away</p>
                            <div className="flex items-center gap-1 mt-1.5">
                                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                <span className="text-xs font-medium">4.8</span>
                                <span className="text-xs text-muted-foreground">(324)</span>
                            </div>
                        </div>
                        <Badge variant="secondary" className="text-[10px] bg-emerald-50 text-emerald-700 border-0">Open</Badge>
                    </div>

                    <div className="flex gap-2 mt-4">
                        <Button size="sm" className="flex-1 h-9 gap-1.5 text-xs">
                            <Navigation className="h-3.5 w-3.5" />
                            Directions
                        </Button>
                        <Button variant="outline" size="sm" className="h-9 gap-1.5 text-xs">
                            <Phone className="h-3.5 w-3.5" />
                            Call
                        </Button>
                    </div>
                </div>

                {/* Expanded Content */}
                {sheetState !== "peek" && (
                    <ScrollArea className="flex-1">
                        <Separator />
                        <div className="px-5 py-4 space-y-3">
                            <h3 className="text-sm font-semibold">Nearby</h3>
                            {places.map((place) => (
                                <div key={place.name} className="flex items-center gap-3">
                                    <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center shrink-0">
                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium">{place.name}</p>
                                        <p className="text-[10px] text-muted-foreground">{place.type} · {place.distance}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                        <span className="text-xs">{place.rating}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                )}
            </div>
        </div>
    );
}
