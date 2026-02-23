"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { MobileFrame } from "@/components/mobile/mobile-frame";
import { Check, Copy, Terminal } from "lucide-react";

interface BlockViewerProps {
    name: string;
    title: string;
    description: string;
    category: string;
    registryDependencies?: string[];
    code: string;
}

export function BlockViewer({
    name,
    title,
    description,
    category,
    registryDependencies,
    code,
}: BlockViewerProps) {
    const [copied, setCopied] = useState(false);
    const [copiedInstall, setCopiedInstall] = useState(false);

    const handleCopy = (text: string, setter: (v: boolean) => void) => {
        navigator.clipboard.writeText(text);
        setter(true);
        setTimeout(() => setter(false), 2000);
    };

    const installCommand = `npx shadcn add "${typeof window !== "undefined" ? window.location.origin : ""}/r/${name}.json"`;

    return (
        <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden">
            {/* Left column — device preview via iframe */}
            <div className="w-[440px] shrink-0 flex items-center justify-center bg-muted/20">
                <MobileFrame slug={name} className="h-[min(calc(100vh-6rem),812px)]" />
            </div>

            {/* Right column — block info + code */}
            <div className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden border-l">
                <div className="p-6 max-w-3xl">
                    {/* Header */}
                    <div className="mb-5">
                        <div className="flex items-center gap-3 mb-1.5">
                            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
                            <Badge variant="secondary" className="text-xs capitalize">
                                {category}
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{description}</p>
                    </div>

                    {/* Install Command */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex-1 min-w-0 flex items-center gap-2 rounded-lg border bg-muted/50 px-3 py-2 font-mono text-xs overflow-hidden">
                            <Terminal className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                            <span className="truncate">{installCommand}</span>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-9 gap-1.5 shrink-0"
                            onClick={() => handleCopy(installCommand, setCopiedInstall)}
                        >
                            {copiedInstall ? (
                                <Check className="h-3.5 w-3.5" />
                            ) : (
                                <Copy className="h-3.5 w-3.5" />
                            )}
                            {copiedInstall ? "Copied" : "Copy"}
                        </Button>
                    </div>

                    {/* Dependencies */}
                    {registryDependencies && registryDependencies.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap mb-5">
                            <span className="text-xs text-muted-foreground">Dependencies:</span>
                            {registryDependencies.map((dep) => (
                                <Badge key={dep} variant="outline" className="text-[10px]">
                                    {dep}
                                </Badge>
                            ))}
                        </div>
                    )}

                    <Separator className="mb-5" />

                    {/* Code */}
                    <Tabs defaultValue="code">
                        <div className="flex items-center justify-between mb-3">
                            <TabsList>
                                <TabsTrigger value="code">Code</TabsTrigger>
                                <TabsTrigger value="usage">Usage</TabsTrigger>
                            </TabsList>
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-8 gap-1.5 text-xs"
                                onClick={() => handleCopy(code, setCopied)}
                            >
                                {copied ? (
                                    <Check className="h-3.5 w-3.5" />
                                ) : (
                                    <Copy className="h-3.5 w-3.5" />
                                )}
                                {copied ? "Copied!" : "Copy code"}
                            </Button>
                        </div>

                        <TabsContent value="code" className="mt-0">
                            <div className="rounded-lg border bg-zinc-950 overflow-hidden">
                                <div className="flex items-center px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
                                    <span className="text-xs font-mono text-zinc-400">
                                        {name}.tsx
                                    </span>
                                </div>
                                <div className="overflow-auto max-h-[calc(100vh-22rem)]">
                                    <pre className="p-4 text-sm">
                                        <code className="text-zinc-300 font-mono text-[13px] leading-relaxed whitespace-pre">
                                            {code}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="usage" className="mt-0">
                            <div className="rounded-lg border bg-zinc-950 overflow-hidden">
                                <div className="flex items-center px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
                                    <span className="text-xs font-mono text-zinc-400">
                                        example.tsx
                                    </span>
                                </div>
                                <div className="overflow-auto">
                                    <pre className="p-4 text-sm">
                                        <code className="text-zinc-300 font-mono text-[13px] leading-relaxed whitespace-pre">
                                            {`import { ${toPascalCase(name)} } from "@/registry/dubai/${name}/${name}"

export default function Page() {
  return <${toPascalCase(name)} />
}`}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

function toPascalCase(str: string): string {
    return str
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join("");
}
