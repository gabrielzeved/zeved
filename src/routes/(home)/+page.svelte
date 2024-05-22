<script lang="ts">
	import Avatar from '$lib/components/avatar.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import Socials from '$lib/components/socials.svelte';
	import { transition } from '$lib/utils';
	import { fly } from 'svelte/transition';
</script>

<main
	in:fly={transition.in}
	out:fly={transition.out}
	class="w-screen h-screen grid place-items-center"
>
	<div class="flex flex-col items-center gap-4">
		<Avatar />

		<div class="text-center">
			<h1 class="text-gray-900 text-xl font-bold">Gabriel Azevedo</h1>
			<span class="text-gray-700 text-sm font-light">Full-stack Software Engineer</span>
		</div>
		<Navbar />
		<Socials />
	</div>
</main>
