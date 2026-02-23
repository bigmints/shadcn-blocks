"use client";

import dynamic from "next/dynamic";
import { use } from "react";

const blockComponents: Record<string, ReturnType<typeof dynamic>> = {
    "shell-01": dynamic(() => import("@/registry/new-york/shell-01/shell-01").then((m) => ({ default: m.Shell01 }))),
    "shell-02": dynamic(() => import("@/registry/new-york/shell-02/shell-02").then((m) => ({ default: m.Shell02 }))),
    "shell-03": dynamic(() => import("@/registry/new-york/shell-03/shell-03").then((m) => ({ default: m.Shell03 }))),
    "login-01": dynamic(() => import("@/registry/new-york/login-01/login-01").then((m) => ({ default: m.Login01 }))),
    "login-02": dynamic(() => import("@/registry/new-york/login-02/login-02").then((m) => ({ default: m.Login02 }))),
    "login-03": dynamic(() => import("@/registry/new-york/login-03/login-03").then((m) => ({ default: m.Login03 }))),
    "form-01": dynamic(() => import("@/registry/new-york/form-01/form-01").then((m) => ({ default: m.Form01 }))),
    "form-02": dynamic(() => import("@/registry/new-york/form-02/form-02").then((m) => ({ default: m.Form02 }))),
    "form-03": dynamic(() => import("@/registry/new-york/form-03/form-03").then((m) => ({ default: m.Form03 }))),
    "list-01": dynamic(() => import("@/registry/new-york/list-01/list-01").then((m) => ({ default: m.List01 }))),
    "list-02": dynamic(() => import("@/registry/new-york/list-02/list-02").then((m) => ({ default: m.List02 }))),
    "list-03": dynamic(() => import("@/registry/new-york/list-03/list-03").then((m) => ({ default: m.List03 }))),
    "filter-01": dynamic(() => import("@/registry/new-york/filter-01/filter-01").then((m) => ({ default: m.Filter01 }))),
    "filter-02": dynamic(() => import("@/registry/new-york/filter-02/filter-02").then((m) => ({ default: m.Filter02 }))),
    "error-01": dynamic(() => import("@/registry/new-york/error-01/error-01").then((m) => ({ default: m.Error01 }))),
    "error-02": dynamic(() => import("@/registry/new-york/error-02/error-02").then((m) => ({ default: m.Error02 }))),
    "confirmation-01": dynamic(() => import("@/registry/new-york/confirmation-01/confirmation-01").then((m) => ({ default: m.Confirmation01 }))),
    "confirmation-02": dynamic(() => import("@/registry/new-york/confirmation-02/confirmation-02").then((m) => ({ default: m.Confirmation02 }))),
    "payment-01": dynamic(() => import("@/registry/new-york/payment-01/payment-01").then((m) => ({ default: m.Payment01 }))),
    "payment-02": dynamic(() => import("@/registry/new-york/payment-02/payment-02").then((m) => ({ default: m.Payment02 }))),
    "payment-03": dynamic(() => import("@/registry/new-york/payment-03/payment-03").then((m) => ({ default: m.Payment03 }))),
    "sheet-01": dynamic(() => import("@/registry/new-york/sheet-01/sheet-01").then((m) => ({ default: m.Sheet01 }))),
    "modal-01": dynamic(() => import("@/registry/new-york/modal-01/modal-01").then((m) => ({ default: m.Modal01 }))),
    "notification-01": dynamic(() => import("@/registry/new-york/notification-01/notification-01").then((m) => ({ default: m.Notification01 }))),
};

export default function PreviewPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const BlockComponent = blockComponents[slug];

    if (!BlockComponent) {
        return <div className="p-4 text-muted-foreground">Block not found</div>;
    }

    return (
        <>
            {/* Force min-height:0 on ALL flex children so ScrollArea constrains properly */}
            <style>{`
        .flex > *, .flex-col > * {
          min-height: 0;
        }
      `}</style>
            <div className="fixed inset-0 overflow-hidden">
                <BlockComponent />
            </div>
        </>
    );
}
