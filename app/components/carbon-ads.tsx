'use client';

import { useEffect } from 'react';

const CarbonAds = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.carbonads.com/carbon.js?serve=CEAIC53L&placement=flowbite-reactcom';
    script.id = '_carbonads_js';
    script.async = true;

    document.querySelectorAll('#carbon-container')[0].appendChild(script);
  }, []);

  return (
    <aside className="fixed bottom-5 right-5 z-50 hidden sm:block">
      <div id="carbon-container"></div>
    </aside>
  );
};

export default CarbonAds;
