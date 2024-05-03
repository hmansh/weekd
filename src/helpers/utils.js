export const isUndefined = (value) => typeof value === 'undefined';

export const capitalize = (str) => {
	if (typeof str !== 'string') return '';

	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const openLinkInNewTab = (url) => {
	const win = window.open(url, '_blank');
	win.focus();
};

export const capitalizeEachWord = (str) => {
	const words = str.split(' ');
	const capitalizedWords = words.map((word) => capitalize(word));

	return capitalizedWords.join(' ');
};

const simpleHash = (input) => {
	const PRIME = 31;
	let hash = 0;

	for (let i = 0; i < input.length; i += 1) {
		hash = (hash * PRIME + input.charCodeAt(i)) % 1000000007;
	}

	return hash;
};

export const generateSimpleHash = (input) => {
	if (typeof input === 'number') {
		const value = input.toString();
		return simpleHash(value);
	}

	return simpleHash(input);
};

export const convertSpaceToDash = (str) => {
	if (typeof str !== 'string') return '';

	return str.trim().toLowerCase().replace(/\s/g, '-');
};
