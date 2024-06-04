<script>
	import { AtSignIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-svelte';
</script>

<ul class="flex items-center gap-4 text-gray-500 [&>*]:cursor-pointer">
	<li>
		<a target="_blank" href="https://www.linkedin.com/in/gabriel-azevedo-77b800192/">
			<LinkedinIcon class="hover:text-primary" size={16} />
		</a>
	</li>
	<li>
		<a target="_blank" href="https://github.com/gabrielzeved">
			<GithubIcon class="hover:text-primary" size={16} />
		</a>
	</li>
	<li>
		<a target="_blank" href="https://www.instagram.com/winlogon/">
			<InstagramIcon class="hover:text-primary" size={16} />
		</a>
	</li>
	<li>
		<a target="_blank" href="https://x.com/JotaFrango">
			<TwitterIcon class="hover:text-primary" size={16} />
		</a>
	</li>
	<li>
		<a target="_blank" href="mailto:gabriel.zeved@outlook.com">
			<AtSignIcon class="hover:text-primary" size={16} />
		</a>
	</li>
</ul>
