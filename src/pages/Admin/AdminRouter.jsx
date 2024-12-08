import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminBank from './pages/AdminBankPage/AdminBank';
import { adminRouteConfig } from 'router/routes';
import CommonAdminLayout from 'components/CommonAdminLayout/CommonAdminLayout';

const AdminRouter = () => {
  return (
    <CommonAdminLayout>
      <Routes>
        {Object.entries(adminRouteConfig).map(([routeKey, { path, element }]) => (
          <Route key={routeKey} path={path} element={element} />
        ))}
        <Route path="*" element={<AdminBank />} />
      </Routes>
    </CommonAdminLayout>
  );
};

export default AdminRouter;
