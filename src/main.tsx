import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@/lib/providers/theme-provider.tsx';

import App from './App.tsx';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <App />
        </ThemeProvider>
    </StrictMode>,
);
