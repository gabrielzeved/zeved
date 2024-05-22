import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

export enum ScrollDirection {
	NONE,
	UP,
	DOWN
}

export function useScroll() {
	const scroll = writable({
		direction: ScrollDirection.NONE,
		size: 0
	});

	let lastScrollDirection = get(scroll).direction;

	function handleScroll() {
		const currentScrollSize = window.scrollY;

		const scrollValues = get(scroll);

		switch (true) {
			case currentScrollSize === 0:
				lastScrollDirection = ScrollDirection.NONE;
				break;

			case currentScrollSize > scrollValues.size:
				lastScrollDirection = ScrollDirection.DOWN;
				break;

			case currentScrollSize < scrollValues.size:
				lastScrollDirection = ScrollDirection.UP;
				break;
		}

		if (lastScrollDirection !== scrollValues.direction) {
			scroll.update((val) => ({
				...val,
				direction: lastScrollDirection
			}));
		}

		scroll.update((val) => ({
			...val,
			size: currentScrollSize
		}));
	}

	if (browser) {
		window.addEventListener('scroll', handleScroll);
	}
	const unsubscribe = () => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	};

	return { scroll, unsubscribe };
}
