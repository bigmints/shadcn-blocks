import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import registryData from "@/registry.json";
import { Terminal, Blocks } from "lucide-react";

const categoryLabels: Record<string, string> = {
    shells: "App Shells",
    authentication: "Authentication",
    forms: "Forms",
    lists: "Lists & Grids",
    filters: "Filters",
    status: "Status Pages",
    payment: "Payment",
    overlays: "Overlays",
    onboarding: "Onboarding",
};

const themeDetails = [
    { key: "dubai", image: "/themes/dubai.png", label: "Dubai", shortDescription: "Warm gold & sand" },
    { key: "new-york", image: "/themes/new-york.png", label: "New York", shortDescription: "Clean & minimal" },
    { key: "mumbai", image: "/themes/mumbai.png", label: "Mumbai", shortDescription: "Monsoon teal" },
    { key: "riyadh", image: "/themes/riyadh.png", label: "Riyadh", shortDescription: "Saudi green & gold" },
    { key: "muscat", image: "/themes/muscat.png", label: "Muscat", shortDescription: "Terracotta & incense" },
    { key: "beirut", image: "/themes/beirut.png", label: "Beirut", shortDescription: "Mediterranean azure" },
    { key: "london", image: "/themes/london.png", label: "London", shortDescription: "Fog slate & red" },
    { key: "giza", image: "/themes/giza.png", label: "Giza", shortDescription: "Pyramid ochre & sand" },
    { key: "paris", image: "/themes/paris.png", label: "Paris", shortDescription: "Mauve & champagne" },
];

export default async function BlocksIndex({
    params,
}: {
    params: Promise<{ theme: string }>;
}) {
    const { theme } = await params;

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
        <div className="max-w-5xl mx-auto">
            {/* ── Hero ──────────────────────────────────────────── */}
            <div className="relative overflow-hidden rounded-2xl border bg-card mb-8 mt-8">
                {/* Subtle dot grid background */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />

                <div className="relative px-8 py-12 sm:px-12 sm:py-16">
                    {/* Overline badge */}
                    <div className="mb-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full border bg-background/80 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
                            <Blocks className="size-3" />
                            shadcn/ui registry
                        </span>
                    </div>

                    {/* Large display headline */}
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
                        Mobile blocks for{" "}
                        <span className="text-primary">modern apps</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
                        {registryData.items.length} production-ready mobile UI patterns — tab bars, login flows,
                        payment screens, bottom sheets — built with{" "}
                        <a
                            href="https://ui.shadcn.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-foreground underline underline-offset-4 decoration-muted-foreground/30 hover:decoration-foreground transition-colors"
                        >
                            shadcn/ui
                        </a>
                        . Copy & paste or install with the CLI.
                    </p>

                    {/* Install command */}
                    <div className="inline-flex items-center gap-2.5 rounded-lg border bg-muted/60 px-4 py-2.5 font-mono text-sm text-muted-foreground mb-10">
                        <Terminal className="size-4 shrink-0 text-primary" />
                        <code>npx shadcn add &quot;.../r/{theme}/shell-01.json&quot;</code>
                    </div>

                    {/* Theme selector */}
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                            Choose your style
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-2xl">
                            {themeDetails.map((t) => {
                                const isActive = t.key === theme;
                                return (
                                    <Link key={t.key} href={`/${t.key}/blocks`}>
                                        <div
                                            className={`flex items-center gap-2.5 rounded-xl border p-3 transition-all cursor-pointer ${isActive
                                                ? "border-primary bg-primary/5 shadow-sm"
                                                : "border-transparent bg-muted/40 hover:bg-muted/70"
                                                }`}
                                        >
                                            <div className="size-8 rounded-lg overflow-hidden border shrink-0">
                                                <img src={t.image} alt={t.label} className="size-full object-cover" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-sm font-semibold truncate">{t.label}</span>
                                                    {isActive && (
                                                        <span className="size-1.5 rounded-full bg-primary shrink-0" />
                                                    )}
                                                </div>
                                                <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
                                                    {t.shortDescription}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2">

                {Object.entries(grouped).map(([category, items]) => (
                    <div key={category} className="mb-8">
                        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            {categoryLabels[category] || category}
                            <Badge variant="secondary" className="text-xs">{items.length}</Badge>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {items.map((item) => (
                                <Link key={item.name} href={`/${theme}/blocks/${item.name}`}>
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
        </div>
    );
}
