"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export function List02() {
    const [favorites, setFavorites] = useState<Set<number>>(new Set([1, 4]));

    const toggleFavorite = (index: number) => {
        const newFavs = new Set(favorites);
        if (newFavs.has(index)) newFavs.delete(index);
        else newFavs.add(index);
        setFavorites(newFavs);
    };

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-4 pb-3">
                <div>
                    <h1 className="text-xl font-bold tracking-tight">List Title</h1>
                    <p className="text-xs text-muted-foreground mt-0.5">List description or category</p>
                </div>
                <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                    <Badge className="absolute -top-0.5 -right-0.5 rounded-full px-1.5 py-0 h-4 text-[10px]">2</Badge>
                </button>
            </div>

            {/* Grid Container */}
            <ScrollArea className="flex-1">
                <div className="px-4 pb-6">
                    <div className="grid grid-cols-2 gap-3">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="rounded-xl border overflow-hidden group">
                                {/* Media Placeholder */}
                                <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-lg bg-muted-foreground/5" />
                                    </div>

                                    {/* Action Button */}
                                    <button
                                        onClick={() => toggleFavorite(i)}
                                        className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm"
                                    >
                                        <Heart className={`h-3.5 w-3.5 transition-colors ${favorites.has(i) ? "fill-red-500 text-red-500" : "text-zinc-600"
                                            }`} />
                                    </button>

                                    {/* Label/Badge */}
                                    <Badge className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full">
                                        Label
                                    </Badge>
                                </div>

                                {/* Content Info */}
                                <div className="p-3 space-y-1.5">
                                    <p className="text-sm font-medium leading-tight line-clamp-1">Item Headline {i + 1}</p>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                        <span className="text-xs font-medium">4.5</span>
                                        <span className="text-[10px] text-muted-foreground">(128)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-bold">Value</span>
                                        <span className="text-xs text-muted-foreground line-through">Old Value</span>
                                    </div>

                                    {/* Attribute Placeholders */}
                                    <div className="flex items-center gap-1 pt-0.5">
                                        {[...Array(3)].map((_, ci) => (
                                            <div key={ci} className="w-3 h-3 rounded-full bg-muted border border-zinc-200" />
                                        ))}
                                    </div>

                                    <Button size="sm" variant="outline" className="w-full h-8 text-xs mt-1">
                                        Action
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}
