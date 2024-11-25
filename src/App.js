import { useTheme } from 'context';
import './App.css';
import NavLinkItem from 'ui/Link/Link';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
function App() {
  const { toggleTheme } = useTheme();

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={Header} />
      </Routes>
      <Header />
      {/* <button
        onClick={() => {
          toggleTheme();
        }}
      >
        Тема
      </button>
      <Routes></Routes>
      <header className="header"></header> */}
    </div>
  );
}

//сделать поле description в bank на серваке

export default App;
