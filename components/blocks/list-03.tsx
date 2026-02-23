"use client";

import { StatusBar } from "@/components/mobile/status-bar";
import {
    User, Bell, Shield, Palette, Globe, HelpCircle, FileText,
    ChevronRight, Moon, Smartphone, LogOut, Trash2
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface SettingsItemProps {
    icon: React.ElementType;
    label: string;
    description?: string;
    trailing?: React.ReactNode;
    destructive?: boolean;
}

function SettingsItem({ icon: Icon, label, description, trailing, destructive }: SettingsItemProps) {
    return (
        <button className={`flex items-center gap-3 w-full px-5 py-3.5 text-left hover:bg-muted/50 transition-colors active:bg-muted ${destructive ? "text-destructive" : ""}`}>
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${destructive ? "bg-destructive/10" : "bg-muted"
                }`}>
                <Icon className="h-4.5 w-4.5" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{label}</p>
                {description && <p className="text-[11px] text-muted-foreground">{description}</p>}
            </div>
            {trailing ?? <ChevronRight className="h-4 w-4 text-muted-foreground/50 shrink-0" />}
        </button>
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
                    {/* Profile Card */}
                    <div className="px-5 py-3">
                        <button className="flex items-center gap-3 w-full p-3 rounded-xl border hover:bg-muted/30 transition-colors">
                            <Avatar className="h-14 w-14">
                                <AvatarFallback className="bg-primary text-primary-foreground text-lg">JD</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 text-left">
                                <p className="font-semibold">John Doe</p>
                                <p className="text-xs text-muted-foreground">john@example.com</p>
                                <Badge variant="secondary" className="mt-1 text-[10px] px-2 py-0 rounded-full">Pro Plan</Badge>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                        </button>
                    </div>

                    {/* Account Section */}
                    <div className="mt-2">
                        <p className="px-5 py-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Account</p>
                        <SettingsItem icon={User} label="Personal Info" description="Name, email, phone number" />
                        <SettingsItem icon={Shield} label="Security" description="Password, 2FA, biometrics" />
                        <SettingsItem
                            icon={Bell}
                            label="Notifications"
                            description="Push, email, in-app"
                            trailing={<Badge className="text-[10px] rounded-full px-2 py-0 h-5">3</Badge>}
                        />
                    </div>

                    <Separator className="my-2" />

                    {/* Preferences Section */}
                    <div>
                        <p className="px-5 py-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Preferences</p>
                        <SettingsItem
                            icon={Moon}
                            label="Dark Mode"
                            description="System default"
                            trailing={<Switch defaultChecked={false} />}
                        />
                        <SettingsItem icon={Palette} label="Appearance" description="Theme, colors, font size" />
                        <SettingsItem icon={Globe} label="Language" description="English (US)" />
                        <SettingsItem
                            icon={Smartphone}
                            label="Haptic Feedback"
                            trailing={<Switch defaultChecked={true} />}
                        />
                    </div>

                    <Separator className="my-2" />

                    {/* Support Section */}
                    <div>
                        <p className="px-5 py-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Support</p>
                        <SettingsItem icon={HelpCircle} label="Help Center" />
                        <SettingsItem icon={FileText} label="Terms & Privacy" />
                    </div>

                    <Separator className="my-2" />

                    {/* Danger Zone */}
                    <div>
                        <SettingsItem
                            icon={LogOut}
                            label="Sign Out"
                            destructive
                            trailing={null}
                        />
                        <SettingsItem
                            icon={Trash2}
                            label="Delete Account"
                            description="This action cannot be undone"
                            destructive
                            trailing={null}
                        />
                    </div>

                    {/* Version */}
                    <p className="text-center text-[10px] text-muted-foreground mt-6">Version 2.4.1 (Build 387)</p>
                </div>
            </ScrollArea>
        </div>
    );
}
