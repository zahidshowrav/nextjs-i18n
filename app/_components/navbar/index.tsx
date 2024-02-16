'use client';

import { classNames } from '@/app/_utils/helpers';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import LocaleSwitcher from '../localSwitcher';
interface IMenuItem {
	url: string;
	title: string;
}
const Navbar = () => {
	const pathname = usePathname();
	const menuItems: IMenuItem[] = [
		{
			url: '/',
			title: 'Home',
		},
		{
			url: '/about',
			title: 'About',
		},
		{
			url: '/contact',
			title: 'Contact',
		},
	];
	return (
		<div className='w-full h-20 border-b border-slate-100 fixed top-0 bg-black z-10 flex items-center justify-center'>
			<div className='w-[70%] mx-auto flex items-center justify-between '>
				<div className=''>
					{menuItems.map((item: IMenuItem, key: number) => (
						<Link
							key={key}
							href={item?.url}
							className={classNames(
								'p-2 m-2 first:pl-0 first:ml-0 text-gray-200',
								pathname === item?.url
									? 'underline underline-offset-2 font-semibold text-white cursor-text pointer-events-none'
									: ''
							)}
						>
							{item?.title}
						</Link>
					))}
				</div>
				<div className=''>
					<LocaleSwitcher />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
