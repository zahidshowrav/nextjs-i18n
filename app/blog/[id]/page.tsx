import { Metadata } from 'next';
import React from 'react';
import { getBlogPostById } from '@/app/_utils/api-services';
import { IBlogPost } from '@/app/_utils/types';
import BlogDetails from '@/app/_components/blog/details';

export const metadata: Metadata = {
	title: 'Blog Details',
	description: 'Nextjs i18n',
};

interface IBlogDetailsProps {
	params: { id: string };
}

const BlogDetailsPage = async (props: IBlogDetailsProps) => {
	const { params } = props;
	const id: string = params?.id;
	const post: IBlogPost = await getBlogPostById(id);
	// console.log('Post------', post);

	return <BlogDetails post={post || []} />;
};

export default BlogDetailsPage;
