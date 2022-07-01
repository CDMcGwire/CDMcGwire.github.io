// Need to see if Svelte has documentation for exactly what types are being used here
// @ts-nocheck
export default function(node, {duration}) {
	// Needs parameters for direction
	return {
		duration,
		css: t => {
			return `
			transform: rotate3d(0, 1, 0, ${90 * t}deg);
			`
		}
	}
}