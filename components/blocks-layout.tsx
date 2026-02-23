"use client";

import {
    Sidebar,
    SidebarContent,
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
} from "lucide-react";

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
        </Sidebar>
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
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-muted-foreground">
                            Mobile Blocks
                        </span>
                    </div>
                </header>
                <div className="flex-1 overflow-auto">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
}
