import NotFound from 'pages/NotFoundPage/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'router/routes';

const AppRouter = () => {
  return (
    <Routes>
      {Object.entries(routeConfig).map(([routeKey, { path, element }]) => (
        <Route key={routeKey} path={path} element={element} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
