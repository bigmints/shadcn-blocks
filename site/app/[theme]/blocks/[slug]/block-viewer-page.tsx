"use client";

import { BlockViewer } from "@/components/block-viewer";
import type { Theme } from "@/components/blocks-layout";

interface BlockMeta {
    name: string;
    title: string;
    description: string;
    category: string;
    registryDependencies?: string[];
}

export function BlockViewerPage({
    meta,
    code,
    theme,
}: {
    meta: BlockMeta;
    code: string;
    theme: Theme;
}) {
    return (
        <BlockViewer
            name={meta.name}
            title={meta.title}
            description={meta.description}
            category={meta.category}
            registryDependencies={meta.registryDependencies}
            code={code}
            theme={theme}
        />
    );
}
