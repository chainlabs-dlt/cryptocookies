/**
 * Clamps a number between a minimum and maximum value.
 * @param n  The number to clamp.
 * @param min  The minimum value.
 * @param max  The maximum value.
 * @returns  The clamped number.
 */
export function clamp(n: number, min: number, max: number): number {
	return Math.min(Math.max(n, min), max);
}

/**
 * Interpolates between two values.
 * @param b  The beginning value.
 * @param e  The ending value.
 * @param i  The interpolation value.
 * @returns  The interpolated value.
 */
export function interpolate(b: number, e: number, i: number): number {
	return interpolateMax(b, e, i, 100);
}

/**
 * Interpolates between two values, with a maximum value.
 * @param b  The beginning value.
 * @param e  The ending value.
 * @param i  The interpolation value.
 * @param max  The maximum value.
 * @returns  The interpolated value.
 */
export function interpolateMax(b: number, e: number, i: number, max: number): number {
	i = clamp(i, 0, max);
	return b + (i / max) * (e - b);
}

/**
 * Interpolates between two values, with a minimum and maximum value.
 * @param positionsStart  The beginning position value.
 * @param rotationsStart  The beginning rotation value.
 * @param positionsEnd  The ending position value.
 * @param rotationsEnd  The ending rotation value.
 * @param i  The interpolation value.
 * @returns  The interpolated value for position and rotation.
 */
export function interpolateMovement(
	positionsStart: number[],
	rotationsStart: number[],
	positionsEnd: number[],
	rotationsEnd: number[],
	i: number
): [number, number, number, number, number, number] {
	console.log(i);
	const x = interpolate(positionsStart[0], positionsEnd[0], i);
	const y = interpolate(positionsStart[1], positionsEnd[1], i);
	const z = interpolate(positionsStart[2], positionsEnd[2], i);
	const rx = interpolate(rotationsStart[0], rotationsEnd[0], i);
	const ry = interpolate(rotationsStart[1], rotationsEnd[1], i);
	const rz = interpolate(rotationsStart[2], rotationsEnd[2], i);
	return [x, y, z, rx, ry, rz];
}

/**
 * Converts an angle in degrees to radians.
 * @param angle  The angle to convert.
 * @returns  The angle in radians.
 */
export function toRadians(angle: number): number {
	return angle * (Math.PI / 180);
}
