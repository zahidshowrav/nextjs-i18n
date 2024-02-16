import Link from 'next/link';
import React from 'react';

const LocaleSwitcher = () => {
	return (
		<div className='border border-white p-1.5 flex items-center rounded-sm'>
			<Link
				href='/'
				className='p-1.5 mr-1.5 text-sm leading-none text-white rounded-sm hover:bg-gray-200 hover:text-black transition-all pointer-events-none'
			>
				EN
			</Link>
			<Link
				href='/'
				className='p-1.5 text-sm leading-none hover:bg-gray-200 bg-white text-black rounded-sm transition-all'
			>
				DE
			</Link>
		</div>
	);
};

export default LocaleSwitcher;
