"use client";

import { BlockViewer } from "@/components/block-viewer";

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
}: {
    meta: BlockMeta;
    code: string;
}) {
    return (
        <BlockViewer
            name={meta.name}
            title={meta.title}
            description={meta.description}
            category={meta.category}
            registryDependencies={meta.registryDependencies}
            code={code}
        />
    );
}
