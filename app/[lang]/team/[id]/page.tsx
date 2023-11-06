import React from 'react';

const TeamDetailsPage = () => {
	return (
		<div className='py-8'>
			<h1 className='text-center text-2xl'>Team Deatails Page</h1>

			<div className='mx-16'>
				<div className="w-40 h-40 rounded-full bg-slate-500 border border-blue-500 bg-[url('https://www.mykhel.com/thumb/247x100x233/cricket/players/4/5164.jpg')] bg-no-repeat bg-cover bg-center mb-4"></div>
				<h3 className='text-slate-100 text-xl mb-3 font-semibold'>Pat Cummins</h3>
				<p className='text-slate-100'>
					Patrick James Cummins is an Australian international cricketer who captains the
					Australian cricket team in Test and One Day International cricket. A right-arm
					fast bowler, he is currently regarded as one of the all time greatest bowlers in
					Test cricket history.
				</p>
			</div>
		</div>
	);
};

export default TeamDetailsPage;
