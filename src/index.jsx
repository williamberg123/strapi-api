import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/globalStyles';
import Home from './templates/App';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Home />
		</ThemeProvider>
	</React.StrictMode>
);
