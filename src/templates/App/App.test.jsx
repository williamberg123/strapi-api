import { screen } from '@testing-library/react';

import renderThemeProvider from '../../styles/renderThemeProvider';
import Home from '.';
import theme from '../../styles/theme';

it('should render Home correctly', () => {
	renderThemeProvider(<Home />);
	const headingContainer = screen.getByRole('heading', { name: /oi/i }).parentElement;
	expect(headingContainer).toBeInTheDocument();
	expect(headingContainer).toMatchSnapshot();
});
