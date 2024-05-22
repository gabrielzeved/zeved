<script lang="ts">
	import Chip from '$lib/components/chip.svelte';
	import PostCard from '$lib/components/post-card.svelte';
	import { transition } from '$lib/utils.js';
	import { fly } from 'svelte/transition';

	export let data;

	const tags = new Set(
		data.posts.reduce<string[]>((prev, curr) => [...prev, ...curr.categories], [])
	);

	let selectedTag: string | undefined;

	function toggleTag(tag: string) {
		if (selectedTag === tag) {
			selectedTag = undefined;
		} else {
			selectedTag = tag;
		}
	}

	$: posts = data.posts.filter((post) =>
		!!selectedTag ? post.categories.includes(selectedTag) : true
	);
</script>

<section in:fly={transition.in} out:fly={transition.out} class="wrapper flex flex-col">
	<h1 class="py-2 border-b border-gray-300 text-sm text-gray-700">POSTS</h1>

	<ul class="flex gap-2 mt-4">
		{#each tags as tag}
			<li>
				<button type="button" on:click={() => toggleTag(tag)}>
					<Chip active={selectedTag === tag}>
						{tag}
					</Chip>
				</button>
			</li>
		{/each}
	</ul>

	<ul class="posts grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 mt-6">
		{#each posts as post}
			<li class="post">
				<PostCard {post} />
			</li>
		{/each}
	</ul>
</section>
