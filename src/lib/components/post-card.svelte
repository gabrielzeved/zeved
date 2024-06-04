<script lang="ts">
	import Chip from '$lib/components/chip.svelte';
	import type { Post } from '$lib/types';

	export let post: Post;
</script>

<a class="h-full" href={post.slug}>
	<div class="h-full rounded border border-gray-300 overflow-hidden">
		<img class="object-cover aspect-video w-full" alt={post.title} src={post.image} />

		<div class="p-4">
			<ul class="flex items-center flex-wrap gap-2 mb-2">
				{#each post.categories as category}
					<a href={`/blog?tag=${category}`}>
						<Chip>
							{category}
						</Chip>
					</a>
				{/each}
			</ul>

			<h3 class="text-2xl font-bold">{post.title}</h3>
			<span class="text-sm font-thin text-gray-700">{post.description}</span>
		</div>
	</div>
</a>
