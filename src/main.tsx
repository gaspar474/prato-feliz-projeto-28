
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Optimize initial render
const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
