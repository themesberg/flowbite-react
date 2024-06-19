"use client";

import { useSearchParams } from "next/navigation";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function ExamplePageLayout({ children }: PropsWithChildren) {
  const searchParams = useSearchParams();
  const noPadding = searchParams.get("noPadding");

  return <main className={twMerge(noPadding === null && "p-5")}>{children}</main>;
}
