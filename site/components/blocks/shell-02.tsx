"use client";

import { StatusBar } from "@/components/mobile/status-bar";
import {
    Menu, Bell, Search, Home, BarChart3, Settings, HelpCircle,
    LogOut, Star, Users, FileText, X, ChevronRight
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BarChart3, label: "Analytics" },
    { icon: FileText, label: "Documents", badge: "3" },
    { icon: Users, label: "Team" },
    { icon: Star, label: "Favorites" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help & Support" },
];

const quickStats = [
    { label: "Revenue", value: "$12,450", change: "+12.5%" },
    { label: "Orders", value: "1,245", change: "+8.2%" },
    { label: "Users", value: "8,420", change: "+23.1%" },
];

export function Shell02() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className="flex flex-col h-full bg-background relative">
            <StatusBar />

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-3 pb-3 border-b">
                <button
                    onClick={() => setDrawerOpen(true)}
                    className="p-1.5 -ml-1.5 rounded-lg hover:bg-muted transition-colors"
                >
                    <Menu className="h-5 w-5" />
                </button>
                <h1 className="font-semibold text-base">Dashboard</h1>
                <div className="relative">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full" />
                </div>
            </div>

            {/* Search */}
            <div className="px-5 py-3">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search anything..." className="pl-9 h-10 bg-muted/50 border-0" />
                </div>
            </div>

            {/* Content */}
            <ScrollArea className="flex-1">
                <div className="px-5 pb-8 space-y-5">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-2.5">
                        {quickStats.map((stat) => (
                            <Card key={stat.label} className="p-3 gap-0">
                                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
                                <p className="text-lg font-bold mt-0.5">{stat.value}</p>
                                <p className="text-[10px] text-emerald-600 font-medium mt-0.5">{stat.change}</p>
                            </Card>
                        ))}
                    </div>

                    {/* Recent Activity */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-semibold">Recent Activity</h3>
                            <Button variant="ghost" size="sm" className="text-xs h-7 text-muted-foreground">View all</Button>
                        </div>
                        <Card className="divide-y gap-0">
                            {[
                                { title: "New order #1234", desc: "Sarah placed an order for $249", time: "2 min ago" },
                                { title: "Payment received", desc: "Invoice #5678 paid by James", time: "1 hour ago" },
                                { title: "Team member added", desc: "Maria joined the engineering team", time: "3 hours ago" },
                                { title: "Report generated", desc: "Monthly analytics report is ready", time: "5 hours ago" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 px-4 py-3">
                                    <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center shrink-0">
                                        <FileText className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">{item.title}</p>
                                        <p className="text-xs text-muted-foreground truncate">{item.desc}</p>
                                    </div>
                                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">{item.time}</span>
                                </div>
                            ))}
                        </Card>
                    </div>
                </div>
            </ScrollArea>

            {/* Drawer Overlay */}
            {drawerOpen && (
                <>
                    <div
                        className="absolute inset-0 bg-black/40 z-40 transition-opacity"
                        onClick={() => setDrawerOpen(false)}
                    />
                    <div className="absolute inset-y-0 left-0 w-72 bg-background z-50 shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
                        <div className="px-5 pt-14 pb-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">JD</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-sm">John Doe</p>
                                    <p className="text-xs text-muted-foreground">john@example.com</p>
                                </div>
                            </div>
                            <button onClick={() => setDrawerOpen(false)} className="p-1 rounded-lg hover:bg-muted">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <Separator />
                        <ScrollArea className="flex-1">
                            <div className="py-2">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.label}
                                        className={`flex items-center gap-3 w-full px-5 py-3 text-sm transition-colors ${item.active
                                                ? "bg-muted font-medium"
                                                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                            }`}
                                        onClick={() => setDrawerOpen(false)}
                                    >
                                        <item.icon className="h-4.5 w-4.5" />
                                        <span className="flex-1 text-left">{item.label}</span>
                                        {item.badge && (
                                            <Badge variant="secondary" className="rounded-full px-2 py-0 text-[10px] h-5">{item.badge}</Badge>
                                        )}
                                        <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                                    </button>
                                ))}
                            </div>
                        </ScrollArea>
                        <Separator />
                        <button className="flex items-center gap-3 px-5 py-4 text-sm text-destructive hover:bg-muted/50 transition-colors">
                            <LogOut className="h-4.5 w-4.5" />
                            <span>Sign Out</span>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
