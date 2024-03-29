import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'About Us',
	description: 'Nextjs i18n',
};

const AboutPage = () => {
	return (
		<div className=''>
			<h1 className='mt-8 text-3xl font-semibold'>About Page</h1>
			<p className='mt-8'>
				Do you see the fault of our right, therefore, in rejecting the needs of no one, but
				it is often chosen? But the joy of truth, the times itself hates to be assumed! The
				easy-to-follow deserts of the truth hate the pleasure from which they provide
				services.
			</p>
		</div>
	);
};

export default AboutPage;
