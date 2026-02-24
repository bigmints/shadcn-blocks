import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { BlockViewerPage } from "./block-viewer-page";
import registryData from "@/registry.json";

const VALID_THEMES = ["dubai", "new-york"] as const;

interface BlockMeta {
    name: string;
    title: string;
    description: string;
    category: string;
    registryDependencies?: string[];
}

const blockMeta: Record<string, BlockMeta> = {};
for (const item of registryData.items) {
    blockMeta[item.name] = {
        name: item.name,
        title: item.title,
        description: item.description,
        category: (item.categories?.[0] ?? "blocks"),
        registryDependencies: item.registryDependencies ?? [],
    };
}

export function generateStaticParams() {
    const params: { theme: string; slug: string }[] = [];
    for (const theme of VALID_THEMES) {
        for (const item of registryData.items) {
            params.push({ theme, slug: item.name });
        }
    }
    return params;
}

export default async function BlockPage({
    params,
}: {
    params: Promise<{ theme: string; slug: string }>;
}) {
    const { theme, slug } = await params;

    if (!VALID_THEMES.includes(theme as typeof VALID_THEMES[number])) {
        notFound();
    }

    const meta = blockMeta[slug];
    if (!meta) notFound();

    // Always read from registry/dubai/ (single source of truth)
    const filePath = path.join(
        process.cwd(),
        "..",
        "registry",
        "dubai",
        slug,
        `${slug}.tsx`
    );

    let code = "";
    try {
        code = fs.readFileSync(filePath, "utf-8");
    } catch {
        code = "// Source code not found";
    }

    // Transform displayed code to show the active theme's import paths
    if (theme !== "dubai") {
        code = code.replaceAll("@/registry/dubai/", `@/registry/${theme}/`);
    }

    return <BlockViewerPage meta={meta} code={code} theme={theme as "dubai" | "new-york"} />;
}

