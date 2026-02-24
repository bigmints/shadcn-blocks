import { redirect } from "next/navigation";
import registryData from "@/registry.json";

export function generateStaticParams() {
    return registryData.items.map((item) => ({ slug: item.name }));
}

export default async function PreviewPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    redirect(`/dubai/preview/${slug}`);
}
