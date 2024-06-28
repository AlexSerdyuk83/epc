import { useEffect } from 'react';
import './App.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
const app = (window as any).Telegram?.WebApp;

function App() {
  useEffect(() => {
    if (app) {
      app.ready();
    }
  }, []);

  return <div>Epic Connect</div>;
}

export default App;
