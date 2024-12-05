import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from 'components/AppRouter/AppRouter';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </div>
  );
}

export default App;
