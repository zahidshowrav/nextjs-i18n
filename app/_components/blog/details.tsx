import { IBlogPost } from '@/app/_utils/types';
import Image from 'next/image';
import React from 'react';

interface IBlogProps {
	post: IBlogPost | null;
}

const BlogDetails = (props: IBlogProps) => {
	const { post } = props;
	console.log('post Details--- From Blog Details', post);
	return (
		<div className="">
			<div className="">
				<article className="flex flex-col items-start justify-between">
					<div className="relative w-full">
						<Image
							src="/blog-placeholder-image.svg"
							alt={post?.title || ''}
							width="700"
							height="400"
							className="w-full rounded-2xl bg-gray-700"
						/>
						<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
					</div>
					<div className="max-w-xl">
						<div className="mt-8 flex items-center gap-x-4 text-xs">
							<time
								dateTime="2020-03-16"
								className="text-white"
							>
								2020-03-16
							</time>
							<a
								href="#"
								className="relative rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-700 hover:text-gray-200 hover:bg-gray-700"
							>
								Marketing
							</a>
						</div>
						<div className="group relative">
							<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-300">
								<a href="">
									<span className="absolute inset-0" />
									{post?.title || ''}
								</a>
							</h3>
							<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">
								{post?.body || ''}
							</p>
						</div>
						<div className="relative mt-8 flex items-center gap-x-4">
							<Image
								src="/author-placeholder-image.svg"
								alt=""
								width="40"
								height="40"
								className="rounded-full bg-gray-700"
							/>
							<div className="text-sm leading-6">
								<p className="font-semibold text-gray-300">
									<a href="#">
										<span className="absolute inset-0" />
										Author
									</a>
								</p>
								<p className="text-gray-300">Michael Foster</p>
							</div>
						</div>
					</div>
				</article>
			</div>
		</div>
	);
};

export default BlogDetails;
