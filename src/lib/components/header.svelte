<script lang="ts">
	import { ScrollDirection, useScroll } from '$lib/actions/hideOnScroll';
	import Avatar from '$lib/components/avatar.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { transition } from '$lib/utils';
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';

	const { scroll, unsubscribe } = useScroll();

	onDestroy(unsubscribe);
</script>

<header
	in:fly={transition.in}
	out:fly={transition.out}
	class={`border-b border-gray-100 w-full flex sticky top-0 bg-white/70 backdrop-blur transition-all duration-300 ${
		$scroll.direction === ScrollDirection.DOWN ? '-translate-y-full' : 'translate-y-0'
	}`}
>
	<div class="wrapper flex items-center justify-between gap-4">
		<a href="/" class="flex gap-2 items-center">
			<Avatar class="!w-10 !h-10 !border" />
			<h1 class="text-gray-900 text-sm font-bold">zeved</h1>
		</a>

		<div class="flex gap-4 items-center">
			<Navbar />
		</div>
	</div>
</header>
