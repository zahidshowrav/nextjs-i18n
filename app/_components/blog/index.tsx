import { IBlogPost } from '@/app/_utils/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBlogProps {
	posts: IBlogPost[];
}

const Blog = (props: IBlogProps) => {
	const { posts } = props;
	console.log('posts--- From Blog', posts);

	return (
		<div className="">
			<div className="mb-16">
				<h1 className="text-3xl font-semibold">Blog</h1>
				<p className="mt-8 text-base">
					Simple blog page with some blog articles. Learn how to grow your business with
					our expert advice
				</p>
			</div>

			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				{posts.map((post: IBlogPost) => (
					<article
						key={post.id}
						className="flex flex-col items-start justify-between"
					>
						<div className="relative w-full">
							<Link
								href={`/blog/${post.id}`}
								className="cursor-pointer"
							>
								<Image
									src="/blog-placeholder-image.svg"
									alt={post?.title || ''}
									width="700"
									height="400"
									className="w-full rounded-2xl bg-gray-700"
								/>
							</Link>
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
									<Link href={`/blog/${post.id}`}>
										<span className="absolute inset-0" />
										<span className="w-full line-clamp-1">{post.title}</span>
									</Link>
								</h3>
								<p className="w-full mt-5 line-clamp-2 text-sm leading-6 text-gray-300">
									{post.body}
								</p>
							</div>
							<div className="relative mt-8 flex items-center gap-x-4">
								<Image
									src="author-placeholder-image.svg"
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

					// <article
					// 	key={post.id}
					// 	className="flex max-w-xl flex-col items-start justify-between"
					// >
					// 	<div className="flex items-center gap-x-4 text-xs">
					// 		<time
					// 			dateTime="2020-03-16"
					// 			className="text-gray-500"
					// 		>
					// 			2020-03-16
					// 		</time>
					// 		<a
					// 			href="#"
					// 			className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
					// 		>
					// 			Marketing
					// 		</a>
					// 	</div>
					// 	<div className="group relative">
					// 		<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
					// 			<a href={`/blog/${post.id}`}>
					// 				<span className="absolute inset-0" />
					// 				{post.title}
					// 			</a>
					// 		</h3>
					// 		<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
					// 			{post.body}
					// 		</p>
					// 	</div>
					// 	<div className="relative mt-8 flex items-center gap-x-4">
					// 		<Image
					// 			src="https://placehold.co/40?text=M&font=roboto"
					// 			width={40}
					// 			height={40}
					// 			alt="author"
					// 			className="h-10 w-10 rounded-full bg-gray-50"
					// 		/>
					// 		<div className="text-sm leading-6">
					// 			<p className="font-semibold text-gray-900">
					// 				<a href="#">
					// 					<span className="absolute inset-0" />
					// 					Michael Foster
					// 				</a>
					// 			</p>
					// 		</div>
					// 	</div>
					// </article>
				))}
			</div>
		</div>
	);
};

export default Blog;
