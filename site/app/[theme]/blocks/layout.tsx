import { BlocksLayout } from "@/components/blocks-layout";
import { TooltipProvider } from "@/components/ui/tooltip";
import { notFound } from "next/navigation";

const VALID_THEMES = [
    "dubai",
    "new-york",
    "mumbai",
    "riyadh",
    "muscat",
    "beirut",
    "london",
    "giza",
    "paris",
] as const;

export type Theme = typeof VALID_THEMES[number];

export function generateStaticParams() {
    return VALID_THEMES.map((theme) => ({ theme }));
}

export default async function ThemeBlocksLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ theme: string }>;
}) {
    const { theme } = await params;
    if (!VALID_THEMES.includes(theme as Theme)) {
        notFound();
    }

    return (
        <TooltipProvider>
            <BlocksLayout theme={theme as Theme}>
                {children}
            </BlocksLayout>
        </TooltipProvider>
    );
}
