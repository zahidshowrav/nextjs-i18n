import React from 'react';
import { Locale } from '@/i18n.config';
import Team from '../_components/features/Team';
import { getDictionary } from '@/lib/dictionary';

interface ITeamPageProps {
	params: { lang: Locale };
}
// eslint-disable-next-line @next/next/no-async-client-component
const TeamPage = async (props: ITeamPageProps) => {
	const {
		params: { lang },
	} = props;
	const dictionary = await getDictionary(lang);

	return (
		<Team
			lang={lang}
			dictionary={dictionary}
		/>
	);
};

export default TeamPage;
