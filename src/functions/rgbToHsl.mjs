export function _rgbToHsl(rgbStr) {
	const [r, g, b] = rgbStr
			.slice(4, -1)
			.split(',')
			.map(Number),
		max = Math.max(r, g, b),
		min = Math.min(r, g, b),
		l = Math.floor((max + min) / ((0xff * 2) / 100));

	if (max === min) return `hsl(${[0, 0 + '%', l + '%']})`;
	const d = max - min,
		s = Math.floor((d / (l > 50 ? 0xff * 2 - max - min : max + min)) * 100);

	if (max === r) return `hsl(${[Math.floor(((g - b) / d + (g < b && 6)) * 60), s + '%', l + '%']})`;

	return max === g
		? `hsl(${[Math.floor(((b - r) / d + 2) * 60), s + '%', l + '%']})`
		: `hsl(${[Math.floor(((r - g) / d + 4) * 60), s + '%', l + '%']})`;
}
