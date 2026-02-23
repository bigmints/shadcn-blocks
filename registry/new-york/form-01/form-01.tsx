"use client";

import { StatusBar } from "@/registry/new-york/_shared/status-bar";
import { ChevronLeft, Camera } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
}

export function Form01() {
    const [errors, setErrors] = useState<FormErrors>({});
    const [name, setName] = useState("Sarah Johnson");
    const [email, setEmail] = useState("sarah@");
    const [phone, setPhone] = useState("");

    const validate = () => {
        const newErrors: FormErrors = {};
        if (!name.trim()) newErrors.name = "Full name is required";
        if (!email.includes("@") || !email.includes(".")) newErrors.email = "Enter a valid email address";
        if (phone && phone.length < 10) newErrors.phone = "Enter a valid phone number";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Header */}
            <div className="flex items-center gap-3 px-4 pt-2 pb-3 border-b">
                <button className="p-2 -ml-2 rounded-lg hover:bg-muted transition-colors">
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <h1 className="font-semibold">Edit Profile</h1>
            </div>

            <ScrollArea className="flex-1">
                <div className="px-6 py-6 space-y-6">
                    {/* Avatar Upload */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="relative">
                            <Avatar className="h-24 w-24">
                                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">SJ</AvatarFallback>
                            </Avatar>
                            <button className="absolute bottom-0 right-0 p-1.5 bg-primary rounded-full text-primary-foreground shadow-lg">
                                <Camera className="h-3.5 w-3.5" />
                            </button>
                        </div>
                        <button className="text-xs text-primary font-medium">Change Photo</button>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="fullname" className="text-sm font-medium">Full Name</Label>
                            <Input
                                id="fullname"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`h-11 ${errors.name ? "border-destructive focus-visible:ring-destructive/20" : ""}`}
                                placeholder="Enter your full name"
                            />
                            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email-profile" className="text-sm font-medium">Email</Label>
                            <Input
                                id="email-profile"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`h-11 ${errors.email ? "border-destructive focus-visible:ring-destructive/20" : ""}`}
                                placeholder="name@example.com"
                            />
                            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone-profile" className="text-sm font-medium">Phone Number</Label>
                            <Input
                                id="phone-profile"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className={`h-11 ${errors.phone ? "border-destructive focus-visible:ring-destructive/20" : ""}`}
                                placeholder="+1 (555) 000-0000"
                            />
                            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="dob" className="text-sm font-medium">Date of Birth</Label>
                            <Input id="dob" type="date" className="h-11" defaultValue="1995-06-15" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio" className="text-sm font-medium">Bio</Label>
                            <Textarea
                                id="bio"
                                placeholder="Tell us about yourself..."
                                className="min-h-[100px] resize-none"
                                defaultValue="Product designer passionate about creating intuitive user experiences."
                            />
                            <p className="text-xs text-muted-foreground text-right">72/160</p>
                        </div>
                    </div>
                </div>
            </ScrollArea>

            {/* Save Button */}
            <div className="border-t px-6 py-4 pb-8">
                <Button className="w-full h-11 font-medium" onClick={validate}>
                    Save Changes
                </Button>
            </div>
        </div>
    );
}
