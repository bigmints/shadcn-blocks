"use client";

import { StatusBar } from "@/registry/new-york/_shared/status-bar";
import { ChevronLeft, Package, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const orderItems = [
    { name: "Wireless Headphones Pro", variant: "Midnight Black", qty: 1, price: "$149.99" },
    { name: "USB-C Charging Cable", variant: "2m, White", qty: 2, price: "$24.98" },
    { name: "Silicone Case", variant: "Navy Blue", qty: 1, price: "$29.99" },
];

export function Confirmation02() {
    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="flex items-center gap-3 px-4 pt-2 pb-3 border-b">
                <button className="p-2 -ml-2 rounded-lg hover:bg-muted transition-colors">
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <h1 className="font-semibold">Order Confirmed</h1>
            </div>

            <ScrollArea className="flex-1">
                <div className="px-4 py-5 space-y-5">
                    {/* Success Banner */}
                    <div className="text-center py-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                            <Package className="h-7 w-7 text-emerald-600" />
                        </div>
                        <h2 className="text-lg font-bold">Thank you for your order!</h2>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <Badge variant="secondary" className="rounded-full text-xs font-mono">
                                #ORD-2847593
                            </Badge>
                        </div>
                    </div>

                    {/* Delivery Estimate */}
                    <div className="rounded-xl border p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Truck className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium">Estimated Delivery</p>
                            <p className="text-xs text-muted-foreground">Feb 27 – Mar 1, 2026</p>
                        </div>
                        <Badge variant="outline" className="text-[10px]">Standard</Badge>
                    </div>

                    {/* Order Items */}
                    <div className="rounded-xl border overflow-hidden">
                        <div className="px-4 py-3 bg-muted/30">
                            <h3 className="text-sm font-semibold">Items ({orderItems.length})</h3>
                        </div>
                        {orderItems.map((item, i) => (
                            <div key={i}>
                                <div className="flex items-center gap-2.5 px-3 py-3">
                                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                                        <div className="w-5 h-5 rounded bg-muted-foreground/10" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-medium truncate">{item.name}</p>
                                        <p className="text-[10px] text-muted-foreground">{item.variant} · Qty: {item.qty}</p>
                                    </div>
                                    <span className="text-xs font-semibold shrink-0">{item.price}</span>
                                </div>
                                {i < orderItems.length - 1 && <Separator />}
                            </div>
                        ))}
                    </div>

                    {/* Price Breakdown */}
                    <div className="rounded-xl border p-4 space-y-2.5">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span className="font-medium">$204.96</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Shipping</span>
                            <span className="font-medium">$9.99</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Tax</span>
                            <span className="font-medium">$18.45</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-base">
                            <span className="font-semibold">Total</span>
                            <span className="font-bold">$233.40</span>
                        </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="rounded-xl border p-4">
                        <h3 className="text-sm font-semibold mb-2">Shipping To</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            John Doe<br />
                            123 Main Street, Apt 4B<br />
                            New York, NY 10001
                        </p>
                    </div>
                </div>
            </ScrollArea>

            {/* Bottom CTA */}
            <div className="border-t px-5 py-4 pb-8">
                <Button className="w-full h-11 font-medium">
                    Track Order
                </Button>
            </div>
        </div>
    );
}
