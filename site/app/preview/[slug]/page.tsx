import registryData from "@/registry.json";
import { PreviewBlock } from "./preview-block";

export function generateStaticParams() {
    return registryData.items.map((item) => ({ slug: item.name }));
}

export default async function PreviewPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return <PreviewBlock slug={slug} />;
}
