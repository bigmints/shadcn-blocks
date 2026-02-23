"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { Search, X, SlidersHorizontal, Calendar, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

const categories = ["All", "Electronics", "Clothing", "Home", "Sports", "Books"];
const priceRanges = ["Under $25", "$25-$50", "$50-$100", "$100+"];
const ratings = ["4★ & up", "3★ & up", "2★ & up"];

const results = [
    { name: "Wireless Headphones Pro", price: "$149.99", originalPrice: "$199.99", rating: "4.8", reviews: "2.4k", tag: "Best Seller", color: "from-violet-100 to-violet-50" },
    { name: "Smart Watch Series X", price: "$299.00", originalPrice: null, rating: "4.6", reviews: "1.8k", tag: "New", color: "from-blue-100 to-blue-50" },
    { name: "Portable Bluetooth Speaker", price: "$59.99", originalPrice: "$79.99", rating: "4.5", reviews: "956", tag: null, color: "from-amber-100 to-amber-50" },
    { name: "Noise Cancelling Earbuds", price: "$89.99", originalPrice: null, rating: "4.7", reviews: "3.2k", tag: "Popular", color: "from-emerald-100 to-emerald-50" },
];

export function Form03() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPrice, setSelectedPrice] = useState<string | null>("$25-$50");
    const [selectedRating, setSelectedRating] = useState<string | null>("4★ & up");
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Search Header */}
            <div className="px-4 pt-3 pb-2 space-y-3">
                <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search products..."
                            className="pl-9 h-10 bg-muted/50 border-0"
                            defaultValue="headphones"
                        />
                    </div>
                    <Button
                        variant={showFilters ? "default" : "outline"}
                        size="icon"
                        className="h-10 w-10 shrink-0"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                </div>

                {/* Category Chips */}
                <div className="overflow-x-auto -mx-4 px-4">
                    <div className="flex gap-2 pb-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${selectedCategory === cat
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
                <div className="px-4 pb-4 border-b space-y-4 animate-in slide-in-from-top-2 duration-200">
                    <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Price Range</p>
                        <div className="flex flex-wrap gap-2">
                            {priceRanges.map((price) => (
                                <button
                                    key={price}
                                    onClick={() => setSelectedPrice(selectedPrice === price ? null : price)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedPrice === price
                                        ? "bg-primary text-primary-foreground"
                                        : "border bg-background text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {price}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Rating</p>
                        <div className="flex flex-wrap gap-2">
                            {ratings.map((rating) => (
                                <button
                                    key={rating}
                                    onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedRating === rating
                                        ? "bg-primary text-primary-foreground"
                                        : "border bg-background text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {rating}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5">
                            <Calendar className="h-3 w-3" />
                            Date Range
                        </Button>
                        <div className="flex-1" />
                        <Button variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground">
                            Reset All
                        </Button>
                        <Button size="sm" className="h-8 text-xs">
                            Apply
                        </Button>
                    </div>
                </div>
            )}

            {/* Active Filters */}
            <div className="px-4 py-2.5 flex items-center gap-2 border-b">
                <span className="text-xs text-muted-foreground shrink-0">4 results</span>
                <div className="flex-1" />
                <div className="flex items-center gap-1.5">
                    {selectedPrice && (
                        <Badge variant="secondary" className="rounded-full text-[10px] gap-1 pr-1.5">
                            {selectedPrice}
                            <X className="h-3 w-3 cursor-pointer hover:text-foreground" onClick={() => setSelectedPrice(null)} />
                        </Badge>
                    )}
                    {selectedRating && (
                        <Badge variant="secondary" className="rounded-full text-[10px] gap-1 pr-1.5">
                            {selectedRating}
                            <X className="h-3 w-3 cursor-pointer hover:text-foreground" onClick={() => setSelectedRating(null)} />
                        </Badge>
                    )}
                </div>
            </div>

            {/* Results — 2-column grid with visual product cards */}
            <ScrollArea className="flex-1">
                <div className="p-4 grid grid-cols-2 gap-3">
                    {results.map((item, i) => (
                        <Card key={i} className="overflow-hidden p-0 gap-0">
                            {/* Product Image Area */}
                            <div className={`relative h-32 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                                <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm" />
                                {item.tag && (
                                    <Badge className="absolute top-2 left-2 text-[9px] px-1.5 py-0 h-4">
                                        {item.tag}
                                    </Badge>
                                )}
                            </div>
                            {/* Product Info */}
                            <div className="p-3 space-y-1">
                                <p className="text-xs font-medium leading-tight line-clamp-2">{item.name}</p>
                                <div className="flex items-center gap-1">
                                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                    <span className="text-[10px] font-medium">{item.rating}</span>
                                    <span className="text-[10px] text-muted-foreground">({item.reviews})</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-sm font-bold">{item.price}</span>
                                    {item.originalPrice && (
                                        <span className="text-[10px] text-muted-foreground line-through">{item.originalPrice}</span>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
