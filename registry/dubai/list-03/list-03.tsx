"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import {
    User, Bell, Shield, Palette,
    ChevronRight, Moon, LogOut
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ListItemProps {
    icon: React.ElementType;
    label: string;
    description?: string;
    trailing?: React.ReactNode;
    destructive?: boolean;
}

function ListItem({ icon: Icon, label, description, trailing, destructive }: ListItemProps) {
    return (
        <div className={`flex items-center gap-3 w-full px-5 py-3.5 text-left hover:bg-muted/50 transition-colors active:bg-muted cursor-pointer ${destructive ? "text-destructive" : ""}`}>
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${destructive ? "bg-destructive/10" : "bg-muted"
                }`}>
                <Icon className="h-4.5 w-4.5" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{label}</p>
                {description && <p className="text-[11px] text-muted-foreground">{description}</p>}
            </div>
            {trailing ?? <ChevronRight className="h-4 w-4 text-muted-foreground/50 shrink-0" />}
        </div>
    );
}

export function List03() {
    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="px-5 pt-4 pb-3">
                <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
            </div>

            <ScrollArea className="flex-1">
                <div className="pb-8">
                    {/* Header Card */}
                    <div className="px-5 py-3">
                        <button className="flex items-center gap-3 w-full p-3 rounded-xl border hover:bg-muted/30 transition-colors">
                            <Avatar className="h-14 w-14">
                                <AvatarFallback className="bg-primary text-primary-foreground text-lg">XX</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 text-left">
                                <p className="font-semibold">User Name</p>
                                <p className="text-xs text-muted-foreground">user@example.com</p>
                                <Badge variant="secondary" className="mt-1 text-[10px] px-2 py-0 rounded-full">Status Label</Badge>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                        </button>
                    </div>

                    {/* Section 1 */}
                    <div className="mt-2">
                        <p className="px-5 py-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Group 1</p>
                        <ListItem icon={User} label="Item Label 1" description="Brief description of item 1" />
                        <ListItem icon={Shield} label="Item Label 2" description="Brief description of item 2" />
                        <ListItem
                            icon={Bell}
                            label="Item Label 3"
                            description="Brief description of item 3"
                            trailing={<Badge className="text-[10px] rounded-full px-2 py-0 h-5">3</Badge>}
                        />
                    </div>

                    <Separator className="my-2" />

                    {/* Section 2 */}
                    <div>
                        <p className="px-5 py-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Group 2</p>
                        <ListItem
                            icon={Moon}
                            label="Toggle Item"
                            description="Description of toggle"
                            trailing={<Switch defaultChecked={false} />}
                        />
                        <ListItem icon={Palette} label="Option Item" description="Description of option" />
                    </div>

                    <Separator className="my-2" />

                    {/* Danger Zone */}
                    <div>
                        <ListItem
                            icon={LogOut}
                            label="Destructive Action"
                            destructive
                            trailing={null}
                        />
                    </div>

                    {/* Footer Info */}
                    <p className="text-center text-[10px] text-muted-foreground mt-6">Version info placeholder</p>
                </div>
            </ScrollArea>
        </div>
    );
}
