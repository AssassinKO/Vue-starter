module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
		'@vue/typescript/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		"indent": [2, "tab", {
			"SwitchCase": 1,
			"flatTernaryExpressions": true
		}],
		"no-tabs": 0,
		"vue/html-indent": [2, "tab", {
			"attribute": 1,
			"baseIndent": 1,
			"closeBracket": 0,
			"alignAttributesVertically": true,
			"ignores": []
		}],
		// 再代入しないならconstでいいでしょ
		"prefer-const": 2,
		// セミコロンは禁止
		"semi": [2, "never"],
		// 文字列はシングルクオートのみ
		"quotes": [2, "single"],
		// === による比較を強制しない
		"eqeqeq": 0,
	},
};
