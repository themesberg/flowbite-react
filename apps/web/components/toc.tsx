"use client";

import type { Doc } from "contentlayer/generated";
import Link from "next/link";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { twMerge } from "tailwind-merge";

export function ToC({ doc }: { doc: Doc }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    function handleIntersection(entries: IntersectionObserverEntry[]) {
      // Find all visible headings
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Sort by their position in the document (top to bottom)
        visibleEntries.sort((a, b) => {
          const aRect = a.boundingClientRect;
          const bRect = b.boundingClientRect;
          return aRect.top - bRect.top;
        });

        // Get all headings
        const allHeadings = Array.from(document.querySelectorAll("#mainContent h2, #mainContent h3, #mainContent h4"));

        // Find index of first visible heading
        const firstVisibleIndex = allHeadings.findIndex((h) => h.id === visibleEntries[0].target.id);

        // If we're at the top of the page and first heading is partially visible
        if (window.scrollY < 100 && firstVisibleIndex === 0) {
          setActiveId(allHeadings[0].id);
          return;
        }

        // If we're at the bottom of the page
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
          setActiveId(allHeadings[allHeadings.length - 1].id);
          return;
        }

        // Otherwise use the first visible heading
        setActiveId(visibleEntries[0].target.id);
      }
    }

    // Create an observer with options
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-100px 0px -66%",
      threshold: 0,
    });

    // Target all headings in the main content
    const headings = document.querySelectorAll("#mainContent h2, #mainContent h3, #mainContent h4");
    headings.forEach((heading) => observer.observe(heading));

    // Set initial active heading
    if (headings.length > 0) {
      setActiveId((headings[0] as HTMLElement).id);
    }

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  return (
    <div className="hidden w-64 flex-none xl:block xl:text-sm">
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col justify-between overflow-y-auto pb-6">
        <div className="mb-8">
          <h4 className="mb-4 mt-5 pl-2.5 text-sm font-semibold uppercase tracking-wide text-gray-900 lg:text-xs dark:text-white">
            On this page
          </h4>
          <nav
            id="visible-table-of-contents"
            // TODO: find a more elegant solution
            className="[&_ul_ul_li_a]:pl-6 [&_ul_ul_ul_li_a]:pl-9"
          >
            <Markdown
              components={{
                a: ({ href, ...props }) => (
                  <ToCLink href={href || "#"} isActive={href === `#${activeId}`}>
                    {props.children}
                  </ToCLink>
                ),
              }}
            >
              {doc.toc}
            </Markdown>
          </nav>
        </div>
      </div>
    </div>
  );
}

function ToCLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={twMerge(
        "group relative inline-block border-l py-2 pl-2.5 font-medium transition-colors duration-200",
        isActive
          ? "border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-500"
          : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300",
      )}
    >
      {children}
      <span className="ml-2 text-primary-700 opacity-0 transition-opacity duration-100 group-hover:opacity-100">#</span>
    </Link>
  );
}
