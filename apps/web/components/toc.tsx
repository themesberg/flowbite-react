"use client";

import type { Doc } from "contentlayer/generated";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export function ToC({ doc }: { doc: Doc }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Find the first visible heading
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Sort by their position in the document (top to bottom)
        visibleEntries.sort((a, b) => {
          const aRect = a.boundingClientRect;
          const bRect = b.boundingClientRect;
          return aRect.top - bRect.top;
        });

        // Use the first visible heading
        setActiveId(visibleEntries[0].target.id);
      }
    };

    // Create an observer with options
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-100px 0px -66%",
      threshold: 0,
    });

    // Target all headings in the main content
    const headings = document.querySelectorAll("#mainContent h2, #mainContent h3, #mainContent h4");
    headings.forEach((heading) => observer.observe(heading));

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
          <nav id="visible-table-of-contents">
            <Markdown
              components={{
                a: ({ href, ...props }) => (
                  <ToCLink href={href || "#"} activeId={activeId} setActiveId={setActiveId}>
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

function ToCLink({
  href,
  children,
  activeId,
  setActiveId,
}: {
  href: string;
  children: React.ReactNode;
  activeId: string;
  setActiveId: (id: string) => void;
}) {
  const isActive = href === `#${activeId}`;

  return (
    <a
      href={href}
      className={`block border-l py-1 pl-3 text-sm transition-colors duration-200 ${
        isActive
          ? "border-primary-600 font-medium text-primary-600 dark:border-primary-500 dark:text-primary-500"
          : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300"
      }`}
      onClick={(e) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView();
          setActiveId(targetId);
        }
      }}
    >
      {children}
    </a>
  );
}
