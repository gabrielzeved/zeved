<script lang="ts">
	export let active = false;
</script>

<li
	class={`border rounded-sm text-xs px-2 py-1 hover:opacity-100 hover:border-primary cursor-pointer ${active ? 'border-primary' : 'border-gray-300 opacity-50'}`}
>
	<slot />
</li>
