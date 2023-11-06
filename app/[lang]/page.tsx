import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

interface IHomeProps {
	params: { lang: Locale };
}

const Home = async (props: IHomeProps) => {
	const {
		params: { lang },
	} = props;
	const { page } = await getDictionary(lang);
	return (
		<div className='px-8'>
			<h1 className='text-xl text-center'>
				{/* Wellcome to Home */}
				{page?.home?.title}
			</h1>
			<p className=''>{page?.home?.description}</p>
		</div>
	);
};

export default Home;
