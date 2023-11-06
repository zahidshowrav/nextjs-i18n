'use client';

import Link from 'next/link';
import React from 'react';
import LocaleSwitcher from '../LocaleSwitcher';
import { Locale } from '@/i18n.config';

interface IPublicNavberProps {
	lang: Locale;
	dictionary: any;
}

const PublicNavbar = (props: IPublicNavberProps) => {
	const {
		lang,
		dictionary: { navigation },
	} = props;
	return (
		<header className='w-[70%] h-[80px] flex items-center justify-between border-b border-slate-100 fixed top-0 left-[15%] bg-black'>
			<div className=''>
				<Link
					href={`/${lang}`}
					className='p-2 m-2'
				>
					{navigation?.home}
				</Link>
				<Link
					href={`/${lang}/about`}
					className='p-2 m-2'
				>
					{navigation?.about}
				</Link>
				<Link
					href={`/${lang}/team`}
					className='p-2 m-2'
				>
					{navigation?.team}
				</Link>
			</div>
			<LocaleSwitcher />
		</header>
	);
};

export default PublicNavbar;
