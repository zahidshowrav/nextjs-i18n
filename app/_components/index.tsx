'use client';

import Link from 'next/link';
import React from 'react';

const PublicNavbar = () => {
	return (
		<div className='w-[70%] h-[80px] flex items-center justify-between border-b border-slate-100 fixed top-0 left-[15%] bg-black'>
			<div className=''>
				<Link
					href='/'
					className='p-2 m-2'
				>
					Home
				</Link>
				<Link
					href='/about'
					className='p-2 m-2'
				>
					About
				</Link>
				<Link
					href='/team'
					className='p-2 m-2'
				>
					Team
				</Link>
			</div>
			<div className=''>
				<Link
					href='/team'
					className='p-2 m-2 bg-white text-black rounded-sm'
				>
					en
				</Link>
				<Link
					href='/team'
					className='p-2 m-2 bg-white text-black rounded-sm'
				>
					de
				</Link>
			</div>
		</div>
	);
};

export default PublicNavbar;
