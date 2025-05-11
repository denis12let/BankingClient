import './App.css';
import { HashRouter } from 'react-router-dom';
import AppRouter from 'components/AppRouter/AppRouter';
import { THEME, useTheme } from 'context';

function App() {
  const { theme } = useTheme();

  return (
    <div className="App" style={{ backgroundColor: theme === THEME.LIGHT ? '#fff' : '#2c3741' }}>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </div>
  );
}

export default App;
