<script lang="ts">
	import Chip from '$lib/components/chip.svelte';
	import PostCard from '$lib/components/post-card.svelte';
	import { transition } from '$lib/utils.js';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>Gabriel Azevedo - Blog</title>
</svelte:head>

<section in:fly={transition.in} out:fly={transition.out} class="wrapper flex flex-col">
	<h1 class="py-2 border-b border-gray-300 text-sm text-gray-700">POSTS</h1>

	<ul class="flex gap-2 mt-4">
		{#each data.tags as tag}
			<li>
				<a href={data.tag === tag ? '/blog' : `/blog?tag=${tag}`}>
					<Chip active={data.tag === tag}>
						{tag}
					</Chip>
				</a>
			</li>
		{/each}
	</ul>

	<ul class="posts grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 mt-6">
		{#each data.posts as post}
			<li class="post">
				<PostCard {post} />
			</li>
		{/each}
	</ul>
</section>
