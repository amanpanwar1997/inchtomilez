import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

import './index.css';

/**
 * Application entry point
 *
 * ErrorBoundary sits outside the main application so it can
 * catch unexpected React rendering errors anywhere below it.
 */
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element "#root" was not found.');
}

createRoot(rootElement).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);