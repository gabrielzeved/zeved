<ul class="flex gap-4 text-sm font-bold uppercase">
	<li><a href="/blog">Blog</a></li>
	<!-- <li><a href="/projects">Projects</a></li> -->
	<!-- <li><a href="/snippets">Snippets</a></li> -->
	<li><a href="/about">About</a></li>
</ul>

<style lang="postcss">
	ul li {
		position: relative;

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
</style>
