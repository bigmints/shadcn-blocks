"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { ChevronDown, X, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const filterChips = [
    { id: "filter-1", label: "Filter 1", selected: "Active" },
    { id: "filter-2", label: "Filter 2", selected: null },
    { id: "filter-3", label: "Filter 3", selected: "Value" },
    { id: "filter-4", label: "Filter 4", selected: "Option A" },
    { id: "filter-5", label: "Filter 5", selected: null },
];

const sortOptions = ["Most Relevant", "Option A", "Option B", "Option C"];



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
            <div className="px-4 pt-4 pb-2">
                <h1 className="text-xl font-bold tracking-tight">List Title</h1>
                <p className="text-xs text-muted-foreground mt-0.5">N items found</p>
            </div>

            {/* Horizontal Filter Chips */}
            <div className="border-b">
                <div className="overflow-x-auto -mx-0">
                    <div className="flex gap-2 px-4 py-2.5">
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
            <div className="flex items-center justify-between px-4 py-2.5 border-b">
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
                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${currentSort === opt
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

            {/* Results list */}
            <ScrollArea className="flex-1">
                <div className="px-4 py-3 space-y-2.5 flex flex-col items-center justify-center h-full text-muted-foreground">
                    <p className="text-xs italic">Content goes here</p>
                </div>
            </ScrollArea>
        </div>
    );
}
