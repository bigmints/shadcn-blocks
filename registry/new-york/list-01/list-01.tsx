"use client";

import { StatusBar } from "@/registry/new-york/_shared/status-bar";
import { Phone, MessageCircle, MoreHorizontal, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const contacts = [
    { name: "Sarah Chen", role: "Product Designer", status: "online", avatar: "SC", lastSeen: "Active now", unread: 3 },
    { name: "James Wilson", role: "Engineering Lead", status: "online", avatar: "JW", lastSeen: "Active now" },
    { name: "Maria Garcia", role: "Marketing Director", status: "away", avatar: "MG", lastSeen: "5m ago" },
    { name: "Alex Kim", role: "Data Scientist", status: "offline", avatar: "AK", lastSeen: "2h ago" },
    { name: "Emily Parker", role: "UX Researcher", status: "online", avatar: "EP", lastSeen: "Active now", unread: 1 },
    { name: "David Chen", role: "iOS Developer", status: "offline", avatar: "DC", lastSeen: "1d ago" },
    { name: "Lisa Thompson", role: "Content Strategist", status: "away", avatar: "LT", lastSeen: "30m ago" },
    { name: "Ryan Mitchell", role: "Backend Engineer", status: "online", avatar: "RM", lastSeen: "Active now" },
];

const statusColors: Record<string, string> = {
    online: "bg-emerald-500",
    away: "bg-amber-400",
    offline: "bg-zinc-300",
};

export function List01() {
    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="px-5 pt-4 pb-3">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold tracking-tight">Contacts</h1>
                    <Badge variant="secondary" className="rounded-full text-xs">{contacts.length} people</Badge>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search contacts..." className="pl-9 h-10 bg-muted/50 border-0" />
                </div>
            </div>

            {/* Contact List */}
            <ScrollArea className="flex-1">
                <div className="pb-6">
                    {contacts.map((contact, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-muted/50 transition-colors active:bg-muted"
                        >
                            {/* Avatar with status */}
                            <div className="relative">
                                <Avatar className="h-12 w-12">
                                    <AvatarFallback className="bg-muted text-sm font-medium">{contact.avatar}</AvatarFallback>
                                </Avatar>
                                <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-background ${statusColors[contact.status]}`} />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-semibold truncate">{contact.name}</p>
                                    {contact.unread && (
                                        <Badge className="rounded-full px-1.5 py-0 h-4 text-[10px] min-w-4 flex items-center justify-center">
                                            {contact.unread}
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-xs text-muted-foreground truncate">{contact.role}</p>
                                <p className="text-[10px] text-muted-foreground mt-0.5">{contact.lastSeen}</p>
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
