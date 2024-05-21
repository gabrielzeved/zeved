<div class="h-32 w-32 rounded-full avatar relative">
	<div
		class="w-[calc(100%-8px)] h-[calc(100%-8px)] bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
	></div>
	<img
		alt="avatar"
		src="/avatar.png"
		class="w-full h-full object-contain rounded-full z-10 relative mix-blend-multiply p-1"
	/>
</div>

<style lang="scss">
	@property --angle {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}

	@property --blur {
		syntax: '<length>';
		initial-value: 0px;
		inherits: true;
	}

	@keyframes gradient {
		0% {
			--angle: 0deg;
			--blur: 5px;
		}

		50% {
			--blur: 6px;
		}

		to {
			--angle: 360deg;
			--blur: 5px;
		}
	}

	.avatar {
		&::before {
			background: inherit;
			border-radius: inherit;
			border: inherit;
			content: '';
			display: block;
			-webkit-filter: blur(var(--blur, 0));
			filter: blur(var(--blur, 0));
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			position: absolute;
		}

		--color-black: #000;
		--color-grey: #272822;
		--color-pink: #ff595e;
		--color-blue: #ffca3a;
		--color-green: #8ac926;
		--color-orange: #1982c4;
		--color-white: #fff;

		-webkit-animation: gradient 2s linear infinite;
		animation: gradient 2s linear infinite;

		border: 2px solid transparent;

		background:
			-webkit-gradient(
					linear,
					left top,
					left bottom,
					from(var(--color-white)),
					to(var(--color-white))
				)
				padding-box,
			conic-gradient(
					from var(--angle),
					var(--color-pink),
					var(--color-blue),
					var(--color-green),
					var(--color-orange),
					var(--color-green),
					var(--color-blue),
					var(--color-pink)
				)
				border-box;
	}
</style>
