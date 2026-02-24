import registryData from "@/registry.json";
import { notFound } from "next/navigation";
import { PreviewBlock } from "./preview-block";
import { ThemeProvider } from "@/components/theme-provider";

const VALID_THEMES = ["dubai", "new-york"] as const;

export function generateStaticParams() {
    const params: { theme: string; slug: string }[] = [];
    for (const theme of VALID_THEMES) {
        for (const item of registryData.items) {
            params.push({ theme, slug: item.name });
        }
    }
    return params;
}

export default async function PreviewPage({
    params,
}: {
    params: Promise<{ theme: string; slug: string }>;
}) {
    const { theme, slug } = await params;

    if (!VALID_THEMES.includes(theme as typeof VALID_THEMES[number])) {
        notFound();
    }

    return (
        <ThemeProvider theme={theme}>
            <PreviewBlock slug={slug} theme={theme as "dubai" | "new-york"} />
        </ThemeProvider>
    );
}

