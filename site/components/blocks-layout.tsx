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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
    Building2,
    ChevronsUpDown,
    Check,
    Sun,
    Moon,
    Home,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
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

const themes = [
    {
        value: "dubai" as const,
        label: "Dubai",
        description: "Warm gold & sand",
        icon: Building2,
    },
    {
        value: "new-york" as const,
        label: "New York",
        description: "Clean & minimal",
        icon: Smartphone,
    },
];

function ThemeSwitcherPopover({ theme }: { theme: "dubai" | "new-york" }) {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const current = themes.find((t) => t.value === theme)!;
    const CurrentIcon = current.icon;

    const switchTo = (target: "dubai" | "new-york") => {
        if (target === theme) {
            setOpen(false);
            return;
        }
        const newPath = pathname.replace(`/${theme}/`, `/${target}/`);
        router.push(newPath);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <CurrentIcon className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{current.label}</span>
                        <span className="truncate text-xs text-muted-foreground">{current.description}</span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
            </PopoverTrigger>
            <PopoverContent
                className="w-[--radix-popover-trigger-width] min-w-56 rounded-lg p-1"
                align="start"
                side="bottom"
                sideOffset={4}
            >
                <div className="flex flex-col gap-0.5">
                    {themes.map((t) => {
                        const Icon = t.icon;
                        const isActive = t.value === theme;
                        return (
                            <button
                                key={t.value}
                                onClick={() => switchTo(t.value)}
                                className={`flex items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors ${isActive
                                    ? "bg-accent text-accent-foreground"
                                    : "hover:bg-accent/50 text-foreground"
                                    }`}
                            >
                                <div className={`flex size-8 items-center justify-center rounded-md border ${isActive ? "bg-primary text-primary-foreground border-primary" : "bg-background"
                                    }`}>
                                    <Icon className="size-4" />
                                </div>
                                <div className="flex-1 text-left">
                                    <div className="font-medium">{t.label}</div>
                                    <div className="text-xs text-muted-foreground">{t.description}</div>
                                </div>
                                {isActive && <Check className="size-4 text-primary" />}
                            </button>
                        );
                    })}
                </div>
            </PopoverContent>
        </Popover>
    );
}

function AppSidebar({ theme }: { theme: "dubai" | "new-york" }) {
    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <ThemeSwitcherPopover theme={theme} />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={pathname === `/${theme}/blocks`}>
                                    <Link href={`/${theme}/blocks`}>
                                        <Home className="size-4" />
                                        <span>Home</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
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
                                            isActive={pathname === `/${theme}/blocks/${item.name}`}
                                        >
                                            <Link href={`/${theme}/blocks/${item.name}`}>
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

function ModeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    // resolvedTheme is undefined on server / before mount
    if (!resolvedTheme) {
        return (
            <button className="inline-flex items-center justify-center rounded-md border size-7 text-muted-foreground">
                <span className="size-3.5" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-md border size-7 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            title={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
            {resolvedTheme === "dark" ? (
                <Sun className="size-3.5" />
            ) : (
                <Moon className="size-3.5" />
            )}
        </button>
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

export function BlocksLayout({ children, theme = "dubai" }: { children: React.ReactNode; theme?: "dubai" | "new-york" }) {
    // Set data-theme on <html> so ALL elements (including portals) inherit theme
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        return () => {
            document.documentElement.removeAttribute("data-theme");
        };
    }, [theme]);

    return (
        <SidebarProvider>
            <AppSidebar theme={theme} />
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
                            <ModeToggle />
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
