'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const TeamPage = () => {
	const router = useRouter();

	return (
		<div className='py-8'>
			<h1 className='text-center text-2xl'>Team Page</h1>
			<div className='flex items-start justify-center flex-nowrap my-16'>
				<div className='bg-slate-300 w-1/3 p-3 rounded-xl m-4'>
					<div
						onClick={() => router.push('/team/1')}
						className="w-40 h-40 rounded-full bg-slate-500 border border-blue-500 bg-[url('https://www.mykhel.com/thumb/247x100x233/cricket/players/4/5164.jpg')] bg-no-repeat bg-cover bg-center mb-4"
					></div>
					<Link href='/team/1'>
						<h3 className='text-slate-900 text-xl mb-3 font-semibold'>Pat Cummins</h3>
					</Link>
					<p className='text-slate-800'>
						Patrick James Cummins is an Australian international cricketer who captains
						the Australian cricket team in Test and One Day International cricket. A
						right-arm fast bowler, he is currently regarded as one of the all time
						greatest bowlers in Test cricket history.
					</p>
				</div>
				<div className='bg-slate-300 w-1/3 p-3 rounded-xl m-4'>
					<div
						onClick={() => router.push('/team/2')}
						className="w-40 h-40 rounded-full bg-slate-500 border border-blue-500 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdugj8kyAjD1IKk_QQ3ZAKCUVUB0-eICceGA&usqp=CAU')] bg-no-repeat bg-cover bg-center mb-4"
					></div>
					<Link href='/team/1'>
						<h3 className='text-slate-900 text-xl mb-3 font-semibold'>David Warner</h3>
					</Link>
					<p className='text-slate-800'>
						David Andrew Warner is an Australian international cricketer and a former
						captain of the Australian national team in limited overs formats and a
						former Test vice-captain. Limited overs formats and a former Test
						vice-captain.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TeamPage;
