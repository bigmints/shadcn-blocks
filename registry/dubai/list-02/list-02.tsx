"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const products = [
    { name: "Minimal Desk Lamp", price: "$89", originalPrice: "$120", rating: 4.8, reviews: 245, category: "Home", favorite: false, colors: ["bg-zinc-900", "bg-amber-100", "bg-zinc-400"] },
    { name: "Leather Backpack", price: "$149", rating: 4.6, reviews: 189, category: "Fashion", favorite: true, colors: ["bg-amber-800", "bg-zinc-900"] },
    { name: "Wireless Charger Pro", price: "$45", rating: 4.9, reviews: 572, category: "Tech", favorite: false, tag: "Sale", colors: ["bg-zinc-100", "bg-zinc-900"] },
    { name: "Ceramic Plant Pot", price: "$32", rating: 4.5, reviews: 98, category: "Home", favorite: false, colors: ["bg-stone-100", "bg-emerald-800"] },
    { name: "Canvas Sneakers", price: "$75", originalPrice: "$95", rating: 4.7, reviews: 312, category: "Fashion", favorite: true, colors: ["bg-zinc-100", "bg-zinc-900", "bg-blue-900"] },
    { name: "Bluetooth Earbuds", price: "$129", rating: 4.8, reviews: 1024, category: "Tech", favorite: false, tag: "New", colors: ["bg-zinc-100", "bg-zinc-900"] },
];

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
                    <h1 className="text-xl font-bold tracking-tight">Discover</h1>
                    <p className="text-xs text-muted-foreground mt-0.5">Curated products for you</p>
                </div>
                <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                    <Badge className="absolute -top-0.5 -right-0.5 rounded-full px-1.5 py-0 h-4 text-[10px]">2</Badge>
                </button>
            </div>

            {/* Product Grid */}
            <ScrollArea className="flex-1">
                <div className="px-4 pb-6">
                    <div className="grid grid-cols-2 gap-3">
                        {products.map((product, i) => (
                            <div key={i} className="rounded-xl border overflow-hidden group">
                                {/* Image Placeholder */}
                                <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-lg bg-muted-foreground/5" />
                                    </div>

                                    {/* Favorite */}
                                    <button
                                        onClick={() => toggleFavorite(i)}
                                        className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm"
                                    >
                                        <Heart className={`h-3.5 w-3.5 transition-colors ${favorites.has(i) ? "fill-red-500 text-red-500" : "text-zinc-600"
                                            }`} />
                                    </button>

                                    {/* Tag */}
                                    {product.tag && (
                                        <Badge className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full">
                                            {product.tag}
                                        </Badge>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-3 space-y-1.5">
                                    <p className="text-sm font-medium leading-tight line-clamp-1">{product.name}</p>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                        <span className="text-xs font-medium">{product.rating}</span>
                                        <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-bold">{product.price}</span>
                                        {product.originalPrice && (
                                            <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
                                        )}
                                    </div>

                                    {/* Color Variants */}
                                    <div className="flex items-center gap-1 pt-0.5">
                                        {product.colors.map((color, ci) => (
                                            <div key={ci} className={`w-3 h-3 rounded-full ${color} border border-zinc-200`} />
                                        ))}
                                    </div>

                                    <Button size="sm" variant="outline" className="w-full h-8 text-xs mt-1">
                                        Add to Cart
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
