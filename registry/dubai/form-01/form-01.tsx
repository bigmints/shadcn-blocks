"use client";

import { StatusBar } from "@/registry/dubai/_shared/status-bar";
import { ChevronLeft, Camera } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Form01() {
    const [name, setName] = useState("Placeholder Name");

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="flex items-center gap-3 px-4 pt-2 pb-3 border-b">
                <button className="p-2 -ml-2 rounded-lg hover:bg-muted transition-colors">
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <h1 className="font-semibold">Form Title</h1>
            </div>

            <ScrollArea className="flex-1">
                <div className="px-6 py-6 space-y-6">
                    {/* Media Upload Placeholder */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="relative">
                            <Avatar className="h-24 w-24">
                                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">XX</AvatarFallback>
                            </Avatar>
                            <button className="absolute bottom-0 right-0 p-1.5 bg-primary rounded-full text-primary-foreground shadow-lg">
                                <Camera className="h-3.5 w-3.5" />
                            </button>
                        </div>
                        <button className="text-xs text-primary font-medium">Action Label</button>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="field-1" className="text-sm font-medium">Field Label 1</Label>
                            <Input
                                id="field-1"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-11"
                                placeholder="Placeholder text"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="field-2" className="text-sm font-medium">Field Label 2</Label>
                            <Input
                                id="field-2"
                                type="email"
                                className="h-11"
                                placeholder="user@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="field-3" className="text-sm font-medium">Field Label 3</Label>
                            <Input
                                id="field-3"
                                type="tel"
                                className="h-11"
                                placeholder="+00 00 000-0000"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="field-4" className="text-sm font-medium">Field Label 4</Label>
                            <Input id="field-4" type="date" className="h-11" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="field-5" className="text-sm font-medium">Field Label 5</Label>
                            <Textarea
                                id="field-5"
                                placeholder="Longer text input..."
                                className="min-h-[100px] resize-none"
                            />
                            <p className="text-xs text-muted-foreground text-right">0/160</p>
                        </div>
                    </div>
                </div>
            </ScrollArea>

            {/* Bottom Action */}
            <div className="border-t px-6 py-4 pb-8">
                <Button className="w-full h-11 font-medium">
                    Submit Action
                </Button>
            </div>
        </div>
    );
}
