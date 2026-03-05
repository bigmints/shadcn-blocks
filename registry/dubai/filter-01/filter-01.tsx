"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const options = [
    { name: "Option 1", count: 42 },
    { name: "Option 2", count: 38 },
    { name: "Option 3", count: 24 },
    { name: "Option 4", count: 18 },
    { name: "Option 5", count: 15 },
];

const swatches = [
    { name: "Swatch A", color: "bg-zinc-900" },
    { name: "Swatch B", color: "bg-white border" },
    { name: "Swatch C", color: "bg-blue-900" },
    { name: "Swatch D", color: "bg-red-500" },
    { name: "Swatch E", color: "bg-amber-400" },
    { name: "Swatch F", color: "bg-emerald-600" },
];

export function Filter01() {
    const [priceRange, setPriceRange] = useState([25, 200]);
    const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set(["Option 1", "Option 3"]));
    const [selectedRating, setSelectedRating] = useState(4);
    const [selectedSwatches, setSelectedSwatches] = useState<Set<string>>(new Set(["Swatch A"]));

    const toggleOption = (name: string) => {
        const next = new Set(selectedOptions);
        if (next.has(name)) next.delete(name);
        else next.add(name);
        setSelectedOptions(next);
    };

    const toggleSwatch = (name: string) => {
        const next = new Set(selectedSwatches);
        if (next.has(name)) next.delete(name);
        else next.add(name);
        setSelectedSwatches(next);
    };

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Sheet Handle & Header */}
            <div className="flex flex-col items-center pt-2">
                <div className="w-10 h-1 bg-muted-foreground/20 rounded-full mb-3" />
                <div className="flex items-center justify-between w-full px-5 pb-3 border-b">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="rounded-full text-xs">3 active</Badge>
                        <button className="p-1.5 rounded-lg hover:bg-muted transition-colors">
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            <ScrollArea className="flex-1">
                <div className="px-5 py-5 space-y-6">
                    {/* Range Slider */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold">Range Filter</h3>
                            <span className="text-xs text-muted-foreground">
                                {priceRange[0]} — {priceRange[1]}
                            </span>
                        </div>
                        <Slider
                            min={0}
                            max={500}
                            step={5}
                            value={priceRange}
                            onValueChange={setPriceRange}
                            className="w-full"
                        />
                        <div className="flex justify-between text-[10px] text-muted-foreground">
                            <span>Min</span>
                            <span>Max</span>
                        </div>
                    </div>

                    <Separator />

                    {/* Options Checklist */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold">Options</h3>
                        <div className="space-y-2.5">
                            {options.map((opt) => (
                                <div key={opt.name} className="flex items-center gap-3">
                                    <Checkbox
                                        id={`opt-${opt.name}`}
                                        checked={selectedOptions.has(opt.name)}
                                        onCheckedChange={() => toggleOption(opt.name)}
                                    />
                                    <Label htmlFor={`opt-${opt.name}`} className="flex-1 text-sm font-normal cursor-pointer">
                                        {opt.name}
                                    </Label>
                                    <span className="text-xs text-muted-foreground">{opt.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Separator />

                    {/* Rating */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold">Minimum Rating</h3>
                        <div className="flex gap-2">
                            {[5, 4, 3, 2, 1].map((rating) => (
                                <button
                                    key={rating}
                                    onClick={() => setSelectedRating(rating)}
                                    className={`flex-1 py-2.5 rounded-lg text-center text-sm font-medium transition-all ${selectedRating === rating
                                        ? "bg-primary text-primary-foreground"
                                        : "border hover:bg-muted"
                                        }`}
                                >
                                    {rating}★
                                </button>
                            ))}
                        </div>
                    </div>

                    <Separator />

                    {/* Swatches */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold">Swatch Picker</h3>
                        <div className="flex gap-3">
                            {swatches.map((swatch) => (
                                <button
                                    key={swatch.name}
                                    onClick={() => toggleSwatch(swatch.name)}
                                    className="flex flex-col items-center gap-1.5"
                                >
                                    <div className={`w-8 h-8 rounded-full ${swatch.color} ${selectedSwatches.has(swatch.name) ? "ring-2 ring-primary ring-offset-2" : ""
                                        } transition-all`} />
                                    <span className="text-[10px] text-muted-foreground">{swatch.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollArea>

            {/* Footer */}
            <div className="border-t px-5 py-4 pb-8 flex gap-3">
                <Button variant="outline" className="flex-1 h-11">
                    Clear All
                </Button>
                <Button className="flex-1 h-11 font-medium">
                    Show Results
                </Button>
            </div>
        </div>
    );
}
