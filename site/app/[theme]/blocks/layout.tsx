import { BlocksLayout } from "@/components/blocks-layout";
import { TooltipProvider } from "@/components/ui/tooltip";
import { notFound } from "next/navigation";

const VALID_THEMES = ["dubai", "new-york"] as const;

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
    if (!VALID_THEMES.includes(theme as typeof VALID_THEMES[number])) {
        notFound();
    }

    return (
        <TooltipProvider>
            <BlocksLayout theme={theme as "dubai" | "new-york"}>
                {children}
            </BlocksLayout>
        </TooltipProvider>
    );
}
