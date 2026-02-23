"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { ChevronLeft, Check, Pencil, MapPin, CreditCard, Package } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const steps = [
    { label: "Shipping", icon: MapPin },
    { label: "Payment", icon: CreditCard },
    { label: "Review", icon: Package },
];

export function Payment03() {
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
                <h1 className="font-semibold">Checkout</h1>
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

            <ScrollArea className="flex-1">
                <div className="px-5 py-5 space-y-4">
                    {/* Step 1: Shipping */}
                    {currentStep === 0 && (
                        <>
                            <h2 className="text-lg font-semibold">Shipping Address</h2>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">First Name</Label>
                                        <Input className="h-11" defaultValue="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">Last Name</Label>
                                        <Input className="h-11" defaultValue="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Address</Label>
                                    <Input className="h-11" defaultValue="123 Main Street" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Apt / Suite</Label>
                                    <Input className="h-11" defaultValue="Apt 4B" />
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="space-y-2 col-span-1">
                                        <Label className="text-sm font-medium">City</Label>
                                        <Input className="h-11" defaultValue="NYC" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">State</Label>
                                        <Input className="h-11" defaultValue="NY" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">ZIP</Label>
                                        <Input className="h-11" defaultValue="10001" />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Step 2: Payment */}
                    {currentStep === 1 && (
                        <>
                            <h2 className="text-lg font-semibold">Payment Details</h2>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Card Number</Label>
                                    <Input className="h-11 font-mono" placeholder="0000 0000 0000 0000" defaultValue="4242 4242 4242 4242" />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">Expiry</Label>
                                        <Input className="h-11" placeholder="MM/YY" defaultValue="12/28" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">CVV</Label>
                                        <Input className="h-11" type="password" placeholder="•••" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Name on Card</Label>
                                    <Input className="h-11" defaultValue="John Doe" />
                                </div>
                            </div>
                        </>
                    )}

                    {/* Step 3: Review */}
                    {currentStep === 2 && (
                        <>
                            <h2 className="text-lg font-semibold">Order Review</h2>

                            <div className="rounded-xl border p-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-semibold flex items-center gap-1.5">
                                        <MapPin className="h-3.5 w-3.5 text-muted-foreground" /> Shipping
                                    </h3>
                                    <button className="text-xs text-primary flex items-center gap-1" onClick={() => setCurrentStep(0)}>
                                        <Pencil className="h-3 w-3" /> Edit
                                    </button>
                                </div>
                                <p className="text-sm text-muted-foreground">John Doe<br />123 Main Street, Apt 4B<br />New York, NY 10001</p>
                            </div>

                            <div className="rounded-xl border p-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-semibold flex items-center gap-1.5">
                                        <CreditCard className="h-3.5 w-3.5 text-muted-foreground" /> Payment
                                    </h3>
                                    <button className="text-xs text-primary flex items-center gap-1" onClick={() => setCurrentStep(1)}>
                                        <Pencil className="h-3 w-3" /> Edit
                                    </button>
                                </div>
                                <p className="text-sm text-muted-foreground">Visa •••• 4242<br />Expires 12/28</p>
                            </div>

                            <div className="rounded-xl border overflow-hidden">
                                <div className="px-4 py-3 bg-muted/30">
                                    <h3 className="text-sm font-semibold">Items</h3>
                                </div>
                                {[
                                    { name: "Wireless Headphones", qty: 1, price: "$149.99" },
                                    { name: "USB-C Cable × 2", qty: 2, price: "$24.98" },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between px-4 py-2.5 text-sm border-t">
                                        <span className="text-muted-foreground">{item.name}</span>
                                        <span className="font-medium">{item.price}</span>
                                    </div>
                                ))}
                                <Separator />
                                <div className="flex justify-between px-4 py-3">
                                    <span className="font-semibold text-sm">Total</span>
                                    <span className="font-bold">$174.97</span>
                                </div>
                            </div>

                            <Badge variant="outline" className="w-full justify-center py-2 text-xs text-muted-foreground">
                                🔒 Your payment is secured with SSL encryption
                            </Badge>
                        </>
                    )}
                </div>
            </ScrollArea>

            {/* Bottom CTA */}
            <div className="border-t px-5 py-4 pb-8 flex gap-3">
                {currentStep > 0 && (
                    <Button variant="outline" className="flex-1 h-11" onClick={() => setCurrentStep(currentStep - 1)}>
                        Back
                    </Button>
                )}
                <Button
                    className="flex-1 h-11 font-medium"
                    onClick={() => currentStep < 2 && setCurrentStep(currentStep + 1)}
                >
                    {currentStep === 2 ? "Place Order — $174.97" : "Continue"}
                </Button>
            </div>
        </div>
    );
}
