import { useTheme } from 'context';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'components/AppRouter/AppRouter';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

//сделать поле description в bank на серваке

export default App;
