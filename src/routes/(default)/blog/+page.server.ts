import type { Post } from '$lib/types';

export async function load({ fetch, url }) {
	const response = await fetch('api/posts');
	let posts: Post[] = await response.json();

	const tag = url.searchParams.get('tag');

	const tags = new Set(posts.reduce<string[]>((prev, curr) => [...prev, ...curr.categories], []));

	posts = posts.filter((post) => (tag ? post.categories.includes(tag) : true));

	return { posts, tags, tag };
}
