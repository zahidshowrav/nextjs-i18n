import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Contact Us',
	description: 'Nextjs i18n',
};

const AboutPage = () => {
	const locationUrl =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1827430660637!2d-73.99043966573694!3d40.758005261035564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855a96da09d%3A0x860bf5a5e1a00a68!2sTimes%20Square%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2sbd!4v1699592700034!5m2!1sen!2sbd';

	return (
		<div className="">
			<h1 className="mt-8 text-3xl font-semibold">Contact Page</h1>
			<p className="mt-8 text-base">
				<span className="font-medium">Email: </span>
				<span>example@email.com</span>
			</p>
			<p className="mt-8 text-base">
				<span className="font-medium">Phone: </span>
				<span>+209 9098 9090</span>
			</p>
			<p className="mt-8 text-base">
				<span className="font-medium">Address: </span>
				<span>Times Square, New York, NY 10036, USA</span>
			</p>
			<div className="mt-8">
				<iframe
					src={locationUrl}
					style={{
						border: 0,
					}}
					allowFullScreen={false}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="border border-light-gray rounded-2xl w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]"
				></iframe>
			</div>
		</div>
	);
};

export default AboutPage;
