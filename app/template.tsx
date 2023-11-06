import PublicNavbar from './_components';

export default function RootTemplate({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-[70%] mx-auto my-0 relative'>
			<PublicNavbar />
			<div className='mt-[80px] py-[60px]'>{children}</div>
		</div>
	);
}
