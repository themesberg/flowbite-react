"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface WindowWithCarbonAds extends Window {
  _carbonads: {
    refresh: () => void;
  };
}

export function CarbonAds() {
  const pathname = usePathname();

  const isDevelopmentMode = process.env.NODE_ENV === "development";

  useEffect(() => {
    const isCarbonAdsRendered = document.querySelector("#carbonads");

    if (isCarbonAdsRendered) {
      (window as unknown as WindowWithCarbonAds)._carbonads.refresh();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.id = "_carbonads_js";
      script.src = "//cdn.carbonads.com/carbon.js?serve=CEAIC53L&placement=flowbite-reactcom";

      const container = document.querySelector("#carbon-container");
      if (container) {
        container.appendChild(script);
      }
    }
  }, [pathname]);

  return isDevelopmentMode ? null : (
    <aside className="fixed bottom-5 right-5 z-50 hidden sm:block">
      <div id="carbon-container" />
    </aside>
  );
}
