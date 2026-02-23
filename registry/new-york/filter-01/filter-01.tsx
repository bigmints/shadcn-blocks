"use client";

import { StatusBar } from "@/registry/new-york/_shared/status-bar";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const brands = [
    { name: "Apple", count: 42 },
    { name: "Samsung", count: 38 },
    { name: "Sony", count: 24 },
    { name: "Bose", count: 18 },
    { name: "JBL", count: 15 },
];

const colorSwatches = [
    { name: "Black", color: "bg-zinc-900" },
    { name: "White", color: "bg-white border" },
    { name: "Navy", color: "bg-blue-900" },
    { name: "Red", color: "bg-red-500" },
    { name: "Gold", color: "bg-amber-400" },
    { name: "Green", color: "bg-emerald-600" },
];

export function Filter01() {
    const [priceRange, setPriceRange] = useState([25, 200]);
    const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set(["Apple", "Sony"]));
    const [selectedRating, setSelectedRating] = useState(4);
    const [selectedColors, setSelectedColors] = useState<Set<string>>(new Set(["Black"]));

    const toggleBrand = (brand: string) => {
        const newBrands = new Set(selectedBrands);
        if (newBrands.has(brand)) newBrands.delete(brand);
        else newBrands.add(brand);
        setSelectedBrands(newBrands);
    };

    const toggleColor = (color: string) => {
        const newColors = new Set(selectedColors);
        if (newColors.has(color)) newColors.delete(color);
        else newColors.add(color);
        setSelectedColors(newColors);
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
                    {/* Price Range */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold">Price Range</h3>
                            <span className="text-xs text-muted-foreground">
                                ${priceRange[0]} — ${priceRange[1]}
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
                            <span>$0</span>
                            <span>$500</span>
                        </div>
                    </div>

                    <Separator />

                    {/* Brand */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold">Brand</h3>
                        <div className="space-y-2.5">
                            {brands.map((brand) => (
                                <div key={brand.name} className="flex items-center gap-3">
                                    <Checkbox
                                        id={`brand-${brand.name}`}
                                        checked={selectedBrands.has(brand.name)}
                                        onCheckedChange={() => toggleBrand(brand.name)}
                                    />
                                    <Label htmlFor={`brand-${brand.name}`} className="flex-1 text-sm font-normal cursor-pointer">
                                        {brand.name}
                                    </Label>
                                    <span className="text-xs text-muted-foreground">{brand.count}</span>
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

                    {/* Colors */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold">Color</h3>
                        <div className="flex gap-3">
                            {colorSwatches.map((swatch) => (
                                <button
                                    key={swatch.name}
                                    onClick={() => toggleColor(swatch.name)}
                                    className="flex flex-col items-center gap-1.5"
                                >
                                    <div className={`w-8 h-8 rounded-full ${swatch.color} ${selectedColors.has(swatch.name) ? "ring-2 ring-primary ring-offset-2" : ""
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
                    Show 24 Results
                </Button>
            </div>
        </div>
    );
}
