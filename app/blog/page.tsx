import { Metadata } from 'next';
import React from 'react';
import { IBlogPost } from '../_utils/types';
import Blog from '../_components/blog';
import { getBlogPosts } from '../_utils/api-services';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Nextjs i18n',
};

const BlogPage = async () => {
	const posts: IBlogPost[] = await getBlogPosts();
	// console.log('Posts------', posts);

	return <Blog posts={posts || []} />;
};

export default BlogPage;
