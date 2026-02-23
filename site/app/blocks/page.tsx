import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import registryData from "@/registry.json";

const categoryLabels: Record<string, string> = {
    shells: "App Shells",
    authentication: "Authentication",
    forms: "Forms",
    lists: "Lists & Grids",
    filters: "Filters",
    status: "Status Pages",
    payment: "Payment",
};

export default function BlocksIndex() {
    const grouped = registryData.items.reduce(
        (acc, item) => {
            const cat = item.categories?.[0] ?? "uncategorized";
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(item);
            return acc;
        },
        {} as Record<string, typeof registryData.items>
    );

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <div className="mb-8 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Mobile Blocks</h1>
                    <p className="text-muted-foreground mt-1">
                        {registryData.items.length} production-ready mobile UI blocks built with shadcn/ui.
                        Install any block with the shadcn CLI.
                    </p>
                </div>
                <a
                    href="https://github.com/bigmints/shadcn-blocks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2"
                    aria-label="View on GitHub"
                >
                    <Github className="size-5" />
                </a>
            </div>

            {Object.entries(grouped).map(([category, items]) => (
                <div key={category} className="mb-8">
                    <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        {categoryLabels[category] || category}
                        <Badge variant="secondary" className="text-xs">{items.length}</Badge>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {items.map((item) => (
                            <Link key={item.name} href={`/blocks/${item.name}`}>
                                <Card className="p-4 gap-0 hover:bg-muted/50 transition-colors cursor-pointer group">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <span className="text-[10px] font-mono text-muted-foreground">
                                            {item.name}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                        {item.description}
                                    </p>
                                    {item.registryDependencies && item.registryDependencies.length > 0 && (
                                        <div className="flex gap-1 mt-2 flex-wrap">
                                            {item.registryDependencies.slice(0, 4).map((dep) => (
                                                <Badge key={dep} variant="outline" className="text-[9px] px-1.5 py-0">
                                                    {dep}
                                                </Badge>
                                            ))}
                                            {item.registryDependencies.length > 4 && (
                                                <Badge variant="outline" className="text-[9px] px-1.5 py-0">
                                                    +{item.registryDependencies.length - 4}
                                                </Badge>
                                            )}
                                        </div>
                                    )}
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
