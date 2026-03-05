"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { ChevronLeft, Check, User, MapPin, ClipboardList } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

const steps = [
    { label: "Personal", icon: User },
    { label: "Address", icon: MapPin },
    { label: "Review", icon: ClipboardList },
];

export function Form02() {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="flex items-center gap-3 px-4 pt-2 pb-3 border-b">
                <button
                    className="p-2 -ml-2 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <h1 className="font-semibold">Multi-step Form</h1>
            </div>

            {/* Step Indicator */}
            <div className="px-8 py-4 border-b">
                <div className="flex items-center justify-between relative">
                    {/* Progress Line */}
                    <div className="absolute top-4 left-4 right-4 h-0.5 bg-muted" />
                    <div
                        className="absolute top-4 left-4 h-0.5 bg-primary transition-all duration-500"
                        style={{ width: `${(currentStep / (steps.length - 1)) * (100 - 10)}%` }}
                    />

                    {steps.map((step, i) => (
                        <div key={step.label} className="relative z-10 flex flex-col items-center gap-1.5">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i < currentStep
                                ? "bg-primary text-primary-foreground"
                                : i === currentStep
                                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                                    : "bg-muted text-muted-foreground"
                                }`}>
                                {i < currentStep ? <Check className="h-4 w-4" /> : <step.icon className="h-4 w-4" />}
                            </div>
                            <span className={`text-[10px] font-medium ${i <= currentStep ? "text-foreground" : "text-muted-foreground"
                                }`}>{step.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Step Content */}
            <ScrollArea className="flex-1">
                <div className="px-6 py-5 space-y-4">
                    {currentStep === 0 && (
                        <>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Field Label 1</Label>
                                <Input className="h-11" placeholder="Placeholder text" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Field Label 2</Label>
                                <Input className="h-11" placeholder="Placeholder text" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Email Field</Label>
                                <Input className="h-11" type="email" placeholder="user@example.com" />
                            </div>
                        </>
                    )}

                    {currentStep === 1 && (
                        <>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Selection Label</Label>
                                <Select defaultValue="option-1">
                                    <SelectTrigger className="h-11">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="option-1">Option 1</SelectItem>
                                        <SelectItem value="option-2">Option 2</SelectItem>
                                        <SelectItem value="option-3">Option 3</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Text Field</Label>
                                <Input className="h-11" placeholder="Additional info" />
                            </div>
                        </>
                    )}

                    {currentStep === 2 && (
                        <>
                            <div className="rounded-xl border p-4 space-y-3">
                                <h3 className="text-sm font-semibold">Summary Section</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Detail 1</span>
                                        <span className="font-medium">Value 1</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Detail 2</span>
                                        <span className="font-medium">Value 2</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 pt-2">
                                <Checkbox id="consent" />
                                <Label htmlFor="consent" className="text-sm text-muted-foreground font-normal leading-relaxed cursor-pointer">
                                    I agree to the terms and conditions. I understand how my data will be used.
                                </Label>
                            </div>
                        </>
                    )}
                </div>
            </ScrollArea>

            {/* Bottom CTA */}
            <div className="border-t px-6 py-4 pb-8 flex gap-3">
                {currentStep > 0 && (
                    <Button variant="outline" className="flex-1 h-11" onClick={() => setCurrentStep(currentStep - 1)}>
                        Back
                    </Button>
                )}
                <Button
                    className="flex-1 h-11 font-medium"
                    onClick={() => currentStep < steps.length - 1 && setCurrentStep(currentStep + 1)}
                >
                    {currentStep === steps.length - 1 ? "Submit" : "Continue"}
                </Button>
            </div>
        </div>
    );
}
