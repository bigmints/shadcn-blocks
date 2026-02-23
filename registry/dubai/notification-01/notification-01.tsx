"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { Bell, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const notifications = [
    { id: "1", app: "Messages", icon: "💬", color: "bg-green-500", title: "Noura Chen", message: "Hey! Are you free for lunch today?", time: "now" },
    { id: "2", app: "Shopping", icon: "🛍", color: "bg-orange-500", title: "Order Shipped", message: "Your order #4829 has been shipped", time: "2m ago" },
    { id: "3", app: "Calendar", icon: "📅", color: "bg-red-500", title: "Meeting in 15 min", message: "Design Review — Conference Room B", time: "5m ago" },
];

const earlier = [
    { name: "Design Team", desc: "New mockups ready", icon: "🎨", time: "10m" },
    { name: "GitHub", desc: "PR #142 merged", icon: "⚡", time: "25m" },
    { name: "Slack", desc: "3 new messages", icon: "💬", time: "1h" },
];

export function Notification01() {
    const [items, setItems] = useState(notifications);
    const [banner, setBanner] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setBanner(true), 1500);
        const t2 = setTimeout(() => setBanner(false), 6000);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    return (
        <div className="flex flex-col h-full bg-background relative">
            <StatusBar />

            {/* Banner notification */}
            {banner && (
                <div className="absolute top-12 left-3 right-3 z-50 animate-in slide-in-from-top-4 duration-500">
                    <Card className="p-3 gap-0 shadow-2xl border-0 bg-background/95 backdrop-blur-xl rounded-2xl">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-sm shrink-0">📞</div>
                            <div className="flex-1 min-w-0">
                                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Phone</span>
                                <p className="text-sm font-semibold">Incoming Call</p>
                                <p className="text-xs text-muted-foreground">Ahmad Rivera</p>
                            </div>
                            <button onClick={() => setBanner(false)} className="p-1 rounded-full hover:bg-muted shrink-0">
                                <X className="h-3.5 w-3.5 text-muted-foreground" />
                            </button>
                        </div>
                    </Card>
                </div>
            )}

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
                <h1 className="text-2xl font-bold">Notifications</h1>
                <div className="relative">
                    <Bell className="h-5 w-5" />
                    {items.length > 0 && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full flex items-center justify-center">
                            <span className="text-[9px] font-bold text-white">{items.length}</span>
                        </div>
                    )}
                </div>
            </div>

            <ScrollArea className="flex-1">
                <div className="px-4 pb-4 space-y-4">
                    {/* New */}
                    {items.length > 0 && (
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1">New</p>
                            {items.map((n) => (
                                <Card key={n.id} className="p-3.5 gap-0 relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />
                                    <div className="flex items-start gap-3">
                                        <div className={`w-9 h-9 rounded-xl ${n.color} flex items-center justify-center text-sm shrink-0`}>{n.icon}</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] text-muted-foreground font-medium">{n.app} · {n.time}</span>
                                                <button onClick={() => setItems((prev) => prev.filter((i) => i.id !== n.id))} className="p-0.5 rounded hover:bg-muted">
                                                    <X className="h-3 w-3 text-muted-foreground" />
                                                </button>
                                            </div>
                                            <p className="text-sm font-semibold mt-0.5">{n.title}</p>
                                            <p className="text-xs text-muted-foreground mt-0.5">{n.message}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}

                    {/* Earlier */}
                    <div className="space-y-1">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1">Earlier</p>
                        {earlier.map((item) => (
                            <div key={item.name} className="flex items-center gap-3 px-1 py-2.5">
                                <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center text-sm shrink-0">{item.icon}</div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium">{item.name}</p>
                                    <p className="text-xs text-muted-foreground truncate">{item.desc}</p>
                                </div>
                                <span className="text-[10px] text-muted-foreground shrink-0">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}
