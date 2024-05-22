import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import remarkUnwrapImages from 'remark-unwrap-images';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
			rehypePlugins: [rehypeSlug]
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
