<script lang="ts">
	import { transition } from '$lib/utils';
	import { fly } from 'svelte/transition';
	export let data;
</script>

<svelte:head>
	<title>Gabriel Azevedo - About</title>
</svelte:head>

<article class="article text-base text-gray-800" in:fly={transition.in} out:fly={transition.out}>
	<div class="prose wrapper pb-24">
		<svelte:component this={data.content} />
	</div>
</article>

<style lang="scss">
	.prose {
		:global(p) {
			margin: 16px 0;
		}

		:global(ul),
		:global(ol) {
			all: revert;
		}

		:global(h1) {
			@apply text-4xl font-bold text-gray-900 my-8;
		}

		:global(h2) {
			@apply text-2xl font-bold text-gray-900 my-8;
		}

		:global(h3) {
			@apply text-xl font-bold text-gray-900 my-8;
		}

		:global(img) {
			@apply mx-auto max-h-80;
		}
		:global(a) {
			@apply text-gray-900 relative font-bold;

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
