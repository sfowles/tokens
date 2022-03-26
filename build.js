const StyleDictionary = require('style-dictionary').extend({
	source: ['json/**/*.json'],
	platforms: {
		// "web/js": {
		//     transformGroup: "tokens-js",
		//     buildPath: "js/",
		//     files: [
		//         // uncomment these ones if you need to generate more formats
		//         // {
		//         //     destination: "tokens.module.js",
		//         //     format: "javascript/module"
		//         // },
		//         // {
		//         //     destination: "tokens.object.js",
		//         //     format: "javascript/object"
		//         // },
		//         {
		//             destination: "tokens.es6.js",
		//             format: "javascript/es6"
		//         }
		//     ]
		// },
		// "web/json": {
		//     transformGroup: "tokens-json",
		//     buildPath: "json/",
		//     files: [
		//         {
		//             destination: "tokens.json",
		//             format: "json/flat"
		//         }
		//     ]
		// },
		scss: {
			transforms: [
				'attribute/cti',
				'name/cti/kebab',
				'name/type',
				'time/seconds',
				'content/icon',
				'size/rem'
			],
			buildPath: '_scss/',
			files: [
				{
					destination: '_variables.scss',
					format: 'scss/variables'
				}
			]
		},
		css: {
			transforms: [
				'attribute/cti',
				'name/cti/kebab',
				'name/type',
				'time/seconds',
				'content/icon',
				'size/rem'
			],
			buildPath: 'css/',
			files: [
				{
					destination: 'variables.css',
					format: 'css/variables'
				}
			]
		}
	}
});

StyleDictionary.registerTransformGroup({
	name: 'tokens-js',
	transforms: ['name/cti/camel', 'size/px', 'color/hex']
});

StyleDictionary.registerTransformGroup({
	name: 'tokens-json',
	transforms: ['attribute/cti', 'name/cti/camel', 'size/px', 'color/css']
});

StyleDictionary.registerTransform({
	name: 'name/type',
	type: 'name',
	matcher: function(token) {
		return (
			token.attributes.category === 'breakpoint' ||
			token.attributes.category === 'color' ||
			token.attributes.category === 'fontSize' ||
			token.attributes.category === 'weight'
		);
	},
	transformer: function(token) {
		return token.attributes.type;
	}
});

StyleDictionary.buildAllPlatforms();
