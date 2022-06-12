import { useContext } from 'react';
import styled, { ThemeContext, css } from 'styled-components';

export const Wrapper = styled.div`
	${() => {
		const { colors: { mainBg, secondaryBg } } = useContext(ThemeContext);
		return css`
			background-color: ${secondaryBg};
			color: ${mainBg};
		`;
	}}
`;
