import type { FlyParams } from 'svelte/transition';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

export const transition = {
	in: {
		y: 20,
		duration: 150,
		delay: 150
	} as FlyParams,
	out: {
		y: -20,
		duration: 150
	} as FlyParams
};
