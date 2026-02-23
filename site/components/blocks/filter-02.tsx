"use client";

import { StatusBar } from "@/components/mobile/status-bar";
import { ChevronDown, X, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const filterChips = [
    { id: "category", label: "Category", options: ["Electronics", "Clothing", "Home"], selected: "Electronics" },
    { id: "brand", label: "Brand", options: ["All Brands", "Apple", "Samsung"], selected: null },
    { id: "price", label: "Price", options: ["Any", "Under $50", "$50-100"], selected: "Under $50" },
    { id: "rating", label: "Rating", options: ["Any", "4+", "3+"], selected: "4+" },
    { id: "shipping", label: "Shipping", options: ["Any", "Free", "Express"], selected: null },
    { id: "condition", label: "Condition", options: ["Any", "New", "Refurbished"], selected: null },
];

const sortOptions = ["Most Relevant", "Price: Low to High", "Price: High to Low", "Newest", "Best Rated"];

const items = [
    { name: "AirPods Pro 3", desc: "Active noise cancellation with transparency mode", price: "$249", rating: "4.9", reviews: "12.5k" },
    { name: "Galaxy Buds Ultra", desc: "360 Audio with intelligent ANC", price: "$199", rating: "4.7", reviews: "8.2k" },
    { name: "USB-C Hub Adapter", desc: "7-in-1 multiport adapter for laptops", price: "$35", rating: "4.5", reviews: "3.1k" },
    { name: "Mechanical Keyboard", desc: "Wireless hot-swappable 75% layout", price: "$89", rating: "4.8", reviews: "2.4k" },
    { name: "Portable SSD 2TB", desc: "USB 3.2 Gen 2 up to 2000MB/s", price: "$149", rating: "4.6", reviews: "5.8k" },
];

export function Filter02() {
    const [chips, setChips] = useState(filterChips);
    const [showSort, setShowSort] = useState(false);
    const [currentSort, setCurrentSort] = useState("Most Relevant");

    const activeCount = chips.filter((c) => c.selected).length;

    const clearChip = (id: string) => {
        setChips(chips.map((c) => c.id === id ? { ...c, selected: null } : c));
    };

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="px-5 pt-4 pb-2">
                <h1 className="text-xl font-bold tracking-tight">Results</h1>
                <p className="text-xs text-muted-foreground mt-0.5">156 items found</p>
            </div>

            {/* Horizontal Filter Chips */}
            <div className="border-b">
                <div className="overflow-x-auto">
                    <div className="flex gap-2 px-5 py-2.5">
                        {chips.map((chip) => (
                            <button
                                key={chip.id}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 ${chip.selected
                                    ? "bg-primary text-primary-foreground"
                                    : "border bg-background text-muted-foreground hover:text-foreground hover:bg-muted"
                                    }`}
                            >
                                <span>{chip.label}{chip.selected ? `: ${chip.selected}` : ""}</span>
                                {chip.selected ? (
                                    <X className="h-3 w-3 cursor-pointer" onClick={(e) => { e.stopPropagation(); clearChip(chip.id); }} />
                                ) : (
                                    <ChevronDown className="h-3 w-3" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sort & Count Bar */}
            <div className="flex items-center justify-between px-5 py-2.5 border-b">
                <div className="flex items-center gap-2">
                    {activeCount > 0 && (
                        <Badge variant="secondary" className="rounded-full text-[10px] px-2 py-0.5">
                            {activeCount} filters
                        </Badge>
                    )}
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs gap-1.5"
                    onClick={() => setShowSort(!showSort)}
                >
                    <ArrowUpDown className="h-3 w-3" />
                    {currentSort}
                </Button>
            </div>

            {/* Sort Dropdown */}
            {showSort && (
                <div className="border-b bg-muted/30 animate-in slide-in-from-top-1 duration-150">
                    {sortOptions.map((opt) => (
                        <button
                            key={opt}
                            className={`w-full text-left px-5 py-2.5 text-sm transition-colors ${currentSort === opt
                                ? "font-medium text-primary bg-primary/5"
                                : "text-muted-foreground hover:bg-muted/50"
                                }`}
                            onClick={() => { setCurrentSort(opt); setShowSort(false); }}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            )}

            {/* Results */}
            <ScrollArea className="flex-1">
                <div className="px-4 py-3 space-y-2.5">
                    {items.map((item, i) => (
                        <Card key={i} className="flex items-center gap-3 p-3.5 gap-y-0">
                            <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center shrink-0">
                                <div className="w-7 h-7 rounded bg-muted-foreground/10" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{item.name}</p>
                                <p className="text-xs text-muted-foreground truncate mt-0.5">{item.desc}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-sm font-bold">{item.price}</span>
                                    <span className="text-[10px] text-amber-500">★ {item.rating}</span>
                                    <span className="text-[10px] text-muted-foreground">({item.reviews})</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
