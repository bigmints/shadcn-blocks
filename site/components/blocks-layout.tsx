"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutGrid,
    LogIn,
    FileText,
    List,
    Filter,
    AlertCircle,
    CreditCard,
    Smartphone,
    Layers,
    Github,
    Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import packageJson from "@/package.json";

const categories = [
    {
        label: "App Shells",
        icon: LayoutGrid,
        items: [
            { name: "shell-01", title: "Tab Bar Navigation" },
            { name: "shell-02", title: "Drawer Navigation" },
            { name: "shell-03", title: "Stack Navigation" },
        ],
    },
    {
        label: "Authentication",
        icon: LogIn,
        items: [
            { name: "login-01", title: "Email + Password" },
            { name: "login-02", title: "Phone + OTP" },
            { name: "login-03", title: "PIN / Biometric" },
        ],
    },
    {
        label: "Forms",
        icon: FileText,
        items: [
            { name: "form-01", title: "Profile Form" },
            { name: "form-02", title: "Stepper Wizard" },
        ],
    },
    {
        label: "Lists & Grids",
        icon: List,
        items: [
            { name: "list-01", title: "Contact List" },
            { name: "list-02", title: "Product Grid" },
            { name: "list-03", title: "Settings" },
        ],
    },
    {
        label: "Filters",
        icon: Filter,
        items: [
            { name: "form-03", title: "Search + Filters" },
            { name: "filter-01", title: "Bottom Sheet" },
            { name: "filter-02", title: "Chip Bar" },
        ],
    },
    {
        label: "Status Pages",
        icon: AlertCircle,
        items: [
            { name: "error-01", title: "Empty / 404" },
            { name: "error-02", title: "Network Error" },
            { name: "confirmation-01", title: "Payment Success" },
            { name: "confirmation-02", title: "Order Summary" },
        ],
    },
    {
        label: "Payment",
        icon: CreditCard,
        items: [
            { name: "payment-01", title: "Card Entry" },
            { name: "payment-02", title: "Method Selection" },
            { name: "payment-03", title: "Checkout Flow" },
        ],
    },
    {
        label: "Overlays",
        icon: Layers,
        items: [
            { name: "sheet-01", title: "Bottom Sheet" },
            { name: "modal-01", title: "Modal Dialog" },
            { name: "notification-01", title: "Push Notifications" },
        ],
    },
];

function AppSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <Smartphone className="size-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-semibold">Mobile Blocks</span>
                                    <span className="text-xs text-muted-foreground">shadcn/ui registry</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                {categories.map((category) => (
                    <SidebarGroup key={category.label}>
                        <SidebarGroupLabel>
                            <category.icon className="mr-2 h-4 w-4" />
                            {category.label}
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {category.items.map((item) => (
                                    <SidebarMenuItem key={item.name}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={pathname === `/blocks/${item.name}`}
                                        >
                                            <Link href={`/blocks/${item.name}`}>
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter>
                <div className="flex items-center justify-between px-3 py-3 text-xs text-muted-foreground">
                    <span>Made in Dubai 🇦🇪</span>
                    <span className="text-[10px] font-mono">v{packageJson.version}</span>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}

function GitHubStars() {
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/repos/bigmints/shadcn-blocks")
            .then((res) => res.json())
            .then((data) => {
                if (data.stargazers_count !== undefined) {
                    setStars(data.stargazers_count);
                }
            })
            .catch(() => { });
    }, []);

    return (
        <a
            href="https://github.com/bigmints/shadcn-blocks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        >
            <Github className="size-3.5" />
            <Star className="size-3 fill-yellow-500 text-yellow-500" />
            {stars !== null ? (
                <span>{stars}</span>
            ) : (
                <span className="w-3" />
            )}
        </a>
    );
}

export function BlocksLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 !h-4" />
                    <div className="flex flex-1 items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                            Mobile Blocks
                        </span>
                        <div className="flex items-center gap-2">
                            <GitHubStars />
                            <a
                                href="https://ui.shadcn.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md border size-7 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                title="shadcn/ui"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="size-3.5"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m208 128-80 80M192 40 40 192" /></svg>
                            </a>
                        </div>
                    </div>
                </header>
                <div className="flex-1 overflow-auto">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
}
