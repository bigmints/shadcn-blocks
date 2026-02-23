import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { BlockViewerPage } from "./block-viewer-page";
import registryData from "@/registry.json";

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
    return registryData.items.map((item) => ({ slug: item.name }));
}

export default async function BlockPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const meta = blockMeta[slug];
    if (!meta) notFound();

    // Read the source code from registry files
    const filePath = path.join(
        process.cwd(),
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

    return <BlockViewerPage meta={meta} code={code} />;
}
