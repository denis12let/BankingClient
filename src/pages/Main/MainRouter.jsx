import CommonBankLayout from 'components/CommonBankLayout/CommonBankLayout';
import NotFound from 'pages/NotFoundPage/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { bankRouteConfig } from 'router/routes';
import Main from './pages/MainPage/Main';

const MainRouter = () => {
  return (
    <CommonBankLayout>
      <Routes>
        {Object.entries(bankRouteConfig).map(([routeKey, { path, element }]) => (
          <Route key={routeKey} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CommonBankLayout>
  );
};

export default MainRouter;
