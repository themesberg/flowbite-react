'use client';
import { load, trackPageview } from 'fathom-client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Fathom() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    load('UXMSXUQI', {
      includedDomains: ['flowbite-react.com'],
      spa: 'auto',
    });

    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    trackPageview();

    // Record a pageview when route changes
  }, [pathname, searchParams]);

  return null;
}
