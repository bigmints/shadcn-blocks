"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { Phone, MessageCircle, MoreHorizontal, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export function List01() {
    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="px-5 pt-4 pb-3">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold tracking-tight">List Title</h1>
                    <Badge variant="secondary" className="rounded-full text-xs">8 Items</Badge>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-9 h-10 bg-muted/50 border-0" />
                </div>
            </div>

            {/* List Container */}
            <ScrollArea className="flex-1">
                <div className="pb-6">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-muted/50 transition-colors active:bg-muted"
                        >
                            {/* Avatar/Icon Placeholder */}
                            <div className="relative">
                                <Avatar className="h-12 w-12">
                                    <AvatarFallback className="bg-muted text-sm font-medium">XX</AvatarFallback>
                                </Avatar>
                                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-background bg-emerald-500" />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-semibold truncate">Item Name {i + 1}</p>
                                    {i % 3 === 0 && (
                                        <Badge className="rounded-full px-1.5 py-0 h-4 text-[10px] min-w-4 flex items-center justify-center">
                                            3
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-xs text-muted-foreground truncate">Item description or role</p>
                                <p className="text-[10px] text-muted-foreground mt-0.5">Status/Time label</p>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-1.5">
                                <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                                    <Phone className="h-4 w-4" />
                                </button>
                                <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                                    <MessageCircle className="h-4 w-4" />
                                </button>
                                <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                                    <MoreHorizontal className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
