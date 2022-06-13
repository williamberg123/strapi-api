module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'no-tabs': 'off',
		indent: 'off',
		'react/jsx-indent': 'off',
		'react/react-in-jsx-scope': 'off',
		'comma-dangle': 'off',
		'react/jsx-filename-extension': 'off',
		'import/prefer-default-export': 'off',
		'arrow-body-style': 'off',
		'import/no-extraneous-dependencies': 'off',
		'array-bracket-spacing': 'off'
	},
};
