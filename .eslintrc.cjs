module.exports = {
	root: true,
	extends: ["eslint:recommended", "plugin:svelte/recommended", "prettier"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: [".svelte"]
	},
	plugins: ["simple-import-sort"],
	rules: {
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error"
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
