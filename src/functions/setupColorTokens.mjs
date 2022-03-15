import { camelize } from './camelize.mjs';
import { formatName } from './formatName.mjs';
import { roundColorValue } from './roundColorValue.mjs';
import { _rgbToHsl } from './rgbToHsl.mjs';

export function setupColorTokens(colorFrame, format) {
	if (colorFrame) {
		let colors = {},
			colorString,
			groupName,
			devName,
			r,
			contrastR,
			g,
			contrastG,
			b,
			contrastB,
			name,
			contrastRatio,
			contrastCompliance,
			contrastColor,
			normalizedName;

		colorFrame.children.forEach(colorGroup => {
			groupName = colorGroup.name;

			colorGroup.children.forEach(color => {
				if (color.name !== '--label--') {
					devName = color.name;
					name = color.children[0].name;
					contrastRatio = color.children[2].name;
					contrastCompliance = color.children[1].name;
					r = color.background[0].color.r;
					g = color.background[0].color.g;
					b = color.background[0].color.b;
					contrastR = color.children[1].fills[0].color.r;
					contrastG = color.children[1].fills[0].color.g;
					contrastB = color.children[1].fills[0].color.b;
					contrastColor = _rgbToHsl(`rgb(
						${roundColorValue(contrastR, 255)},
						${roundColorValue(contrastG, 255)},
						${roundColorValue(contrastB, 255)}
					)`);

					if (format == 'js') {
						colorString = _rgbToHsl(`rgb(
							${roundColorValue(r, 255)},
							${roundColorValue(g, 255)},
							${roundColorValue(b, 255)}
						)`);
					} else {
						colorString = {
							value: _rgbToHsl(`rgb(
								${roundColorValue(r, 255)},
								${roundColorValue(g, 255)},
								${roundColorValue(b, 255)}
							)`),
							type: 'color',
							group: groupName,
							comment: name,
							'contrast ratio': contrastRatio,
							'contrast color': contrastColor,
							'wcag compliance': contrastCompliance
						};
					}
					normalizedName = camelize(devName);
					normalizedName = formatName(normalizedName);
					colors[normalizedName] = colorString;
				}
			});
		});

		return colors;
	} else {
		throw new Error('No frame for setupColorTokens()!');
	}
}
