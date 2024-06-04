import { error } from '@sveltejs/kit';

export async function load() {
	try {
		const post = await import(`./about.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find about post`);
	}
}
