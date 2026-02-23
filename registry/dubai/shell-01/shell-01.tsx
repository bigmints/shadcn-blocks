"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { Home, Search, PlusCircle, Heart, User } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const tabs = [
    { icon: Home, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: PlusCircle, label: "Create" },
    { icon: Heart, label: "Activity" },
    { icon: User, label: "Profile" },
];

const feedItems = [
    { name: "Noura Chen", handle: "@sarahc", time: "2h", text: "Just shipped our new design system! 🎉 The team worked incredibly hard on making everything pixel-perfect.", avatar: "SC", likes: 42, comments: 8 },
    { name: "James Wilson", handle: "@jamesw", time: "4h", text: "Beautiful morning run along the coast. Nothing beats starting the day with fresh air and clear skies. 🏃‍♂️", avatar: "JW", likes: 128, comments: 15 },
    { name: "Maria Garcia", handle: "@mariag", time: "6h", text: "Excited to announce our Series A! We're building something special and can't wait to share more details soon.", avatar: "MG", likes: 256, comments: 32 },
    { name: "Ahmad Kim", handle: "@alexk", time: "8h", text: "Pro tip: Use CSS container queries instead of media queries for truly responsive components. Game changer! 💡", avatar: "AK", likes: 89, comments: 12 },
];

export function Shell01() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-4 pb-3">
                <h1 className="text-2xl font-bold tracking-tight">Feed</h1>
                <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="rounded-full px-2.5 py-0.5 text-xs font-medium">3 new</Badge>
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs bg-primary text-primary-foreground">JD</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            {/* Content */}
            <ScrollArea className="flex-1">
                <div className="px-4 pb-4 space-y-3">
                    {feedItems.map((item, i) => (
                        <Card key={i} className="p-4 gap-0">
                            <div className="flex items-start gap-3">
                                <Avatar className="h-10 w-10 shrink-0">
                                    <AvatarFallback className="text-xs bg-muted">{item.avatar}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-sm">{item.name}</span>
                                        <span className="text-xs text-muted-foreground">{item.handle}</span>
                                        <span className="text-xs text-muted-foreground">· {item.time}</span>
                                    </div>
                                    <p className="text-sm text-foreground/90 mt-1 leading-relaxed">{item.text}</p>
                                    <div className="flex items-center gap-6 mt-3">
                                        <button className="flex items-center gap-1.5 text-muted-foreground hover:text-red-500 transition-colors">
                                            <Heart className="h-4 w-4" />
                                            <span className="text-xs">{item.likes}</span>
                                        </button>
                                        <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
                                            <span className="text-xs">{item.comments}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </ScrollArea>

            {/* Tab Bar */}
            <div className="border-t bg-background/95 backdrop-blur-sm px-2 pb-6 pt-2">
                <div className="flex items-center justify-around">
                    {tabs.map((tab, i) => (
                        <button
                            key={tab.label}
                            onClick={() => setActiveTab(i)}
                            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${activeTab === i
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            <tab.icon className={`h-5 w-5 ${activeTab === i ? "fill-current" : ""}`} />
                            <span className="text-[10px] font-medium">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
