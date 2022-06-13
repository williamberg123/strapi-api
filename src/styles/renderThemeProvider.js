import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

const renderThemeProvider = (children) => {
	return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export default renderThemeProvider;
