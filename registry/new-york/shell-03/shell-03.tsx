"use client";

import { StatusBar } from "@/registry/new-york/_shared/status-bar";
import { ChevronLeft, Share2, MoreHorizontal, Heart, MessageCircle, Bookmark, Star } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Shell03() {
    const [bookmarked, setBookmarked] = useState(false);
    const [liked, setLiked] = useState(false);

    return (
        <div className="flex flex-col h-full bg-background">
            <StatusBar />

            {/* Stack Header */}
            <div className="flex items-center justify-between px-4 pt-2 pb-3 border-b">
                <button className="p-2 -ml-2 rounded-lg hover:bg-muted transition-colors">
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="text-center">
                    <p className="text-sm font-semibold">Article Detail</p>
                    <p className="text-[10px] text-muted-foreground">Design System</p>
                </div>
                <div className="flex items-center gap-1">
                    <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <Share2 className="h-4.5 w-4.5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <MoreHorizontal className="h-4.5 w-4.5" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <ScrollArea className="flex-1">
                <div className="pb-6">
                    {/* Hero Image Placeholder */}
                    <div className="w-full h-52 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-muted-foreground/10 rounded-2xl mx-auto mb-2 flex items-center justify-center">
                                <Star className="h-8 w-8 text-muted-foreground/30" />
                            </div>
                            <p className="text-xs text-muted-foreground">Featured Image</p>
                        </div>
                    </div>

                    <div className="px-5 pt-5 space-y-4">
                        {/* Meta */}
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-[10px] font-medium">Design</Badge>
                            <span className="text-xs text-muted-foreground">8 min read</span>
                            <span className="text-xs text-muted-foreground">· Feb 23, 2026</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-xl font-bold leading-tight tracking-tight">
                            Building a Scalable Design System from Scratch
                        </h1>

                        {/* Author */}
                        <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                                <AvatarFallback className="bg-primary text-primary-foreground text-xs">SC</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <p className="text-sm font-medium">Sarah Chen</p>
                                <p className="text-xs text-muted-foreground">Senior Designer at Acme</p>
                            </div>
                            <Button size="sm" variant="outline" className="h-8 text-xs rounded-full px-4">
                                Follow
                            </Button>
                        </div>

                        <Separator />

                        {/* Article Content */}
                        <div className="space-y-4 text-sm leading-relaxed text-foreground/85">
                            <p>
                                Design systems have become the backbone of modern product development. They provide a shared language between designers and developers, ensuring consistency across every touchpoint.
                            </p>
                            <p>
                                In this comprehensive guide, we&apos;ll walk through the process of building a design system from the ground up — from defining your foundation tokens to creating complex, composable components.
                            </p>
                            <h3 className="text-base font-semibold text-foreground pt-2">1. Start with Foundations</h3>
                            <p>
                                Every great design system begins with its foundations: color, typography, spacing, and elevation. These primitive tokens form the basis for everything you build on top.
                            </p>
                            <h3 className="text-base font-semibold text-foreground pt-2">2. Build Atomic Components</h3>
                            <p>
                                Once your foundations are solid, start building small, reusable components — buttons, inputs, badges, and labels. Keep them flexible with well-defined variants.
                            </p>
                        </div>

                        {/* Engagement Stats */}
                        <Separator />
                        <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1.5 text-xs">
                                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                                <span>4.8 rating</span>
                            </div>
                            <span className="text-xs">·</span>
                            <span className="text-xs">2.4k views</span>
                            <span className="text-xs">·</span>
                            <span className="text-xs">142 shares</span>
                        </div>
                    </div>
                </div>
            </ScrollArea>

            {/* Bottom Action Bar */}
            <div className="border-t bg-background px-5 py-3 pb-7 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setLiked(!liked)}
                        className={`flex items-center gap-1.5 transition-colors ${liked ? "text-red-500" : "text-muted-foreground hover:text-foreground"}`}
                    >
                        <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
                        <span className="text-xs font-medium">248</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-xs font-medium">32</span>
                    </button>
                </div>
                <button
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`transition-colors ${bookmarked ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                    <Bookmark className={`h-5 w-5 ${bookmarked ? "fill-current" : ""}`} />
                </button>
            </div>
        </div>
    );
}
