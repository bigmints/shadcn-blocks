"use client";

import { StatusBar } from "@/registry/new-york/_shared/status-bar";
import { ChevronLeft, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

const steps = ["Personal", "Address", "Review"];

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
                <div className="flex-1">
                    <h1 className="font-semibold text-sm">Create Account</h1>
                    <p className="text-[10px] text-muted-foreground">Step {currentStep + 1} of {steps.length}</p>
                </div>
            </div>

            {/* Step Indicator */}
            <div className="px-6 pt-5 pb-2">
                <div className="flex items-center gap-2">
                    {steps.map((step, i) => (
                        <div key={step} className="flex items-center gap-2 flex-1">
                            <div className="flex items-center gap-2 flex-1">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 transition-all ${i < currentStep
                                            ? "bg-primary text-primary-foreground"
                                            : i === currentStep
                                                ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                                                : "bg-muted text-muted-foreground"
                                        }`}
                                >
                                    {i < currentStep ? <Check className="h-4 w-4" /> : i + 1}
                                </div>
                                <span className={`text-xs font-medium hidden min-[340px]:block ${i <= currentStep ? "text-foreground" : "text-muted-foreground"
                                    }`}>
                                    {step}
                                </span>
                            </div>
                            {i < steps.length - 1 && (
                                <div className={`h-0.5 flex-1 rounded-full min-w-4 ${i < currentStep ? "bg-primary" : "bg-muted"
                                    }`} />
                            )}
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
                                <Label className="text-sm font-medium">First Name</Label>
                                <Input className="h-11" placeholder="John" defaultValue="John" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Last Name</Label>
                                <Input className="h-11" placeholder="Doe" defaultValue="Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Email</Label>
                                <Input className="h-11" type="email" placeholder="john@example.com" defaultValue="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Date of Birth</Label>
                                <Input className="h-11" type="date" defaultValue="1990-01-15" />
                            </div>
                        </>
                    )}

                    {currentStep === 1 && (
                        <>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Street Address</Label>
                                <Input className="h-11" placeholder="123 Main Street" defaultValue="123 Main Street" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Apartment / Suite</Label>
                                <Input className="h-11" placeholder="Apt 4B" defaultValue="Apt 4B" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">City</Label>
                                    <Input className="h-11" placeholder="New York" defaultValue="New York" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">State</Label>
                                    <Select defaultValue="ny">
                                        <SelectTrigger className="h-11">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ny">New York</SelectItem>
                                            <SelectItem value="ca">California</SelectItem>
                                            <SelectItem value="tx">Texas</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">ZIP Code</Label>
                                <Input className="h-11" placeholder="10001" defaultValue="10001" />
                            </div>
                        </>
                    )}

                    {currentStep === 2 && (
                        <>
                            <div className="rounded-xl border p-4 space-y-3">
                                <h3 className="text-sm font-semibold">Personal Information</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Name</span>
                                        <span className="font-medium">John Doe</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Email</span>
                                        <span className="font-medium">john@example.com</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">DOB</span>
                                        <span className="font-medium">Jan 15, 1990</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border p-4 space-y-3">
                                <h3 className="text-sm font-semibold">Address</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Street</span>
                                        <span className="font-medium">123 Main St, Apt 4B</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">City</span>
                                        <span className="font-medium">New York, NY 10001</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 pt-2">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms" className="text-sm text-muted-foreground font-normal leading-relaxed cursor-pointer">
                                    I agree to the Terms of Service and Privacy Policy. I understand my data will be processed securely.
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
