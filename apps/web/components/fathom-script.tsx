"use client";

import { usePathname } from "next/navigation";

export function FathomScript() {
  const pathname = usePathname();
  const isExamplesPage = pathname.startsWith("/examples/");

  if (isExamplesPage) return null;

  return <script data-site="UXMSXUQI" defer src="https://cdn.usefathom.com/script.js" />;
}
