<script>
	import { AtSignIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-svelte';
</script>

<ul class="flex items-center gap-4 text-gray-500 [&>*]:cursor-pointer">
	<li><LinkedinIcon class="hover:text-primary" size={16} /></li>
	<li><GithubIcon class="hover:text-primary" size={16} /></li>
	<li><InstagramIcon class="hover:text-primary" size={16} /></li>
	<li><TwitterIcon class="hover:text-primary" size={16} /></li>
	<li><AtSignIcon class="hover:text-primary" size={16} /></li>
</ul>
