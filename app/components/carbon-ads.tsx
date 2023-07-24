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

	return <div id="carbon-container"></div>;
};

export default CarbonAds;
