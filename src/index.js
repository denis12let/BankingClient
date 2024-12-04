import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'context';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);

//сделай норм экспорты через index.js в папках
//проверка существования карт (по желанию)
//в истории транзакций при удалении сделать так, чтобы не дожидалось сервера, а удалялось само. Частично сделано, только необходимо обновление списка при удалении
