// app.tsx 

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import CustomCursor from './components/effects/CustomCursor';
import InteractiveBackground from './components/effects/InteractiveBackground';
import ScrollProgressBar from './components/effects/ScrollProgressBar';

function App() {
  return (
    // FINAL FIX: Use Vite's built-in environment variable for the base path.
    // This value is guaranteed to be '/CAWAP_WEBSITE/' (from vite.config.js).
    <BrowserRouter basename={import.meta.env.BASE_URL}> 
      <ScrollProgressBar />
      <CustomCursor />
      <InteractiveBackground />
      <div className="relative z-10">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;