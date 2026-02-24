"use client";

import { useEffect } from "react";

export function ThemeProvider({
    theme,
    children,
}: {
    theme: string;
    children: React.ReactNode;
}) {
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        return () => {
            document.documentElement.removeAttribute("data-theme");
        };
    }, [theme]);

    return <>{children}</>;
}
