import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}

	body {
		${({ theme }) => css`
			background-color: ${theme.colors.mainBg};
		`}
	}
`;
