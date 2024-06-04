<script lang="ts">
	import Avatar from '$lib/components/avatar.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import Socials from '$lib/components/socials.svelte';
	import { transition } from '$lib/utils';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Gabriel Azevedo</title>
</svelte:head>

<main
	in:fly={transition.in}
	out:fly={transition.out}
	class="min-h-screen h-full flex flex-col place-items-center gap-4 place-content-center text-center"
>
	<Avatar />

	<div class="text-center">
		<h1 class="text-gray-900 text-xl font-bold">Gabriel Azevedo</h1>
		<span class="text-gray-700 text-sm font-light">Full-stack Software Engineer</span>
	</div>
	<Navbar />
	<Socials />
</main>
