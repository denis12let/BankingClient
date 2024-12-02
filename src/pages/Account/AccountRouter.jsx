import CommonAccountLayout from 'components/CommonAccountLayout/CommonAccountLayout';
import NotFound from 'pages/NotFoundPage/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { accountRouteConfig } from 'router/routes';

const AccountRouter = () => {
  return (
    <CommonAccountLayout>
      <Routes>
        {Object.entries(accountRouteConfig).map(([routeKey, { path, element }]) => (
          <Route key={routeKey} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CommonAccountLayout>
  );
};

export default AccountRouter;
