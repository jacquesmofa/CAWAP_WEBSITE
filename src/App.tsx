// src/App.tsx 

// CHANGE: Import HashRouter instead of BrowserRouter
import { HashRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import CustomCursor from './components/effects/CustomCursor';
import InteractiveBackground from './components/effects/InteractiveBackground';
import ScrollProgressBar from './components/effects/ScrollProgressBar';

function App() {
  return (
    // FINAL FIX: Change to HashRouter. NO 'basename' PROP NEEDED.
    <HashRouter> 
      <ScrollProgressBar />
      <CustomCursor />
      <InteractiveBackground />
      <div className="relative z-10">
        <AppRoutes />
      </div>
    </HashRouter>
  );
}

export default App;