<script lang="ts">
	import Chip from '$lib/components/chip.svelte';
	import { formatDate, transition } from '$lib/utils';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="article text-base text-gray-800" in:fly={transition.in} out:fly={transition.out}>
	<!-- Title -->
	<hgroup class="p-0 md:p-12">
		<!-- Tags -->
		<div class="wrapper">
			<p>Published at {formatDate(data.meta.date)}</p>
			<h1 class="text-5xl font-bold text-gray-900">{data.meta.title}</h1>

			<ul class="flex gap-2 mt-4 items-center">
				{#each data.meta.categories as category}
					<li>
						<Chip>
							{category}
						</Chip>
					</li>
				{/each}
			</ul>
		</div>
	</hgroup>

	<!-- Post -->
	<div class="prose wrapper mb-24">
		<svelte:component this={data.content} />
	</div>
</article>

<style lang="scss">
	.article {
		:global(p) {
			margin: 16px 0;
		}

		:global(h2) {
			@apply text-2xl font-bold text-gray-900 mt-8;
		}

		:global(a) {
			@apply text-gray-900 relative;

			&:hover {
				&::after {
					max-width: 100%;
				}
			}

			&::after {
				content: '';
				position: absolute;
				bottom: -2px;
				height: 2px;
				left: 0;
				width: 100%;
				left: 50%;
				transform: translateX(-50%);
				max-width: 0;
				transition: all 0.2s ease-in-out;
				@apply bg-primary;
			}

			&::before {
				content: '';
				position: absolute;
				bottom: -2px;
				height: 2px;
				width: 100%;
				transition: all 0.2s ease-in-out;
				@apply bg-gray-300;
			}
		}
	}
</style>
