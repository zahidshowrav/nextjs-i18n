import { IBlogPost } from './types';

export const getBlogPosts = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
		const data = await response.json();
		console.log('Blog Posts:', data);
		return data;
	} catch (error) {
		console.log('getBlogPosts Error: ', error);
		return []; // or handle error accordingly
	}
};

export const getBlogPostById = async (id: string) => {
	if (!id) return null;
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const data = await response.json();
		console.log('Blog Post details:', data);
		return data;
	} catch (error) {
		console.log('getBlogPosts Error: ', error);
		return null; // or handle error accordingly
	}
};
