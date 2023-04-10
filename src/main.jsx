import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './providers/theme';
import { ProjectPreviewProvider } from './providers/project-preview';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <ProjectPreviewProvider>
      <App />
    </ProjectPreviewProvider>
  </ThemeProvider>,
);
