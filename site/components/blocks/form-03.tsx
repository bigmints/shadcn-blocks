"use client";

import { StatusBar } from "@/components/mobile/status-bar";
import { Search, X, SlidersHorizontal, Calendar } from "lucide-react";
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
    { name: "Wireless Headphones Pro", price: "$149.99", rating: "4.8", reviews: "2.4k", tag: "Best Seller" },
    { name: "Smart Watch Series X", price: "$299.00", rating: "4.6", reviews: "1.8k", tag: "New" },
    { name: "Portable Bluetooth Speaker", price: "$59.99", rating: "4.5", reviews: "956" },
    { name: "Noise Cancelling Earbuds", price: "$89.99", rating: "4.7", reviews: "3.2k", tag: "Popular" },
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
            <div className="px-5 pt-3 pb-2 space-y-3">
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
                <div className="overflow-x-auto">
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
                <div className="px-5 pb-4 border-b space-y-4 animate-in slide-in-from-top-2 duration-200">
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
            <div className="px-5 py-2.5 flex items-center gap-2 border-b">
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

            {/* Results */}
            <ScrollArea className="flex-1">
                <div className="px-4 py-3 space-y-2.5">
                    {results.map((item, i) => (
                        <Card key={i} className="p-3.5 flex items-center gap-3 gap-y-0">
                            <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center shrink-0">
                                <div className="w-8 h-8 rounded bg-muted-foreground/10" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-medium truncate">{item.name}</p>
                                    {item.tag && (
                                        <Badge className="text-[9px] px-1.5 py-0 h-4 shrink-0">{item.tag}</Badge>
                                    )}
                                </div>
                                <p className="text-base font-bold mt-0.5">{item.price}</p>
                                <div className="flex items-center gap-1 mt-0.5">
                                    <span className="text-xs text-amber-500">★</span>
                                    <span className="text-xs font-medium">{item.rating}</span>
                                    <span className="text-xs text-muted-foreground">({item.reviews})</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
