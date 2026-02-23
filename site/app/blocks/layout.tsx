import { BlocksLayout } from "@/components/blocks-layout";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootBlocksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <TooltipProvider>
            <BlocksLayout>{children}</BlocksLayout>
        </TooltipProvider>
    );
}
