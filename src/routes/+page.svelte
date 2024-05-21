<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Avatar from '../lib/components/avatar.svelte';
</script>

<main class="w-screen h-screen grid place-items-center font-body">
	<div class="flex flex-col items-center gap-4">
		<Avatar />
		<div class="text-center">
			<h1 class="text-gray-900 text-xl font-bold">Gabriel Azevedo</h1>
			<span class="text-gray-700 text-sm font-light">Full-stack Software Engineer</span>
		</div>
		<Navbar />
	</div>
</main>
