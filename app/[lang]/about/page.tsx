import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import React from 'react';

interface IAboutPageProps {
	params: { lang: Locale };
}

const AboutPage = async (props: IAboutPageProps) => {
	const {
		params: { lang },
	} = props;
	const { page } = await getDictionary(lang);

	return (
		<div className='px-8'>
			<h1>{page?.about?.title}</h1>
			<p className=''>{page?.about?.description?.first}</p>
			<p className=''>{page?.about?.description?.second}</p>
		</div>
	);
};

export default AboutPage;
