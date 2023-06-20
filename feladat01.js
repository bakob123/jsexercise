export function feladat01(színek) {
  const length = színek.length;
	if (length <= 2) {
		return length - 1;
	}
	const mixedColors = [];
	for (let i = 0; i < length; i++) {
		let currentColor = színek[i];
		for (let j = i + 1; j < length; j++) {
				mixedColors.push(currentColor + színek[j]);
		}
	}
	return mixedColors.length + 1;
}