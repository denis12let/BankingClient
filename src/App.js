import { useTheme } from 'context';
import './App.css';
function App() {
  const { toggleTheme } = useTheme();

  return (
    <div className="App">
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        Тема
      </button>
      <header className="header"></header>
    </div>
  );
}

export default App;
