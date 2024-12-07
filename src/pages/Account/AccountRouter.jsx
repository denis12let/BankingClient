import CommonAccountLayout from 'components/CommonAccountLayout/CommonAccountLayout';
import { APP_ROUTES_PATH } from 'constants/app';
import NotFound from 'pages/NotFoundPage/NotFound';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { accountRouteConfig } from 'router/routes';
import Cards from './pages/CardsPage/Cards';

const AccountRouter = () => {
  const { isAuth } = useSelector((state) => state.user);
  const { isProfile } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  useEffect(() => {
    const localIsProfile = localStorage.getItem('isProfile');
    const localIsAuth = localStorage.getItem('isAuth');

    if (localIsAuth === 'false') {
      navigate(APP_ROUTES_PATH.REGISTRATION);
      return;
    }

    if (localIsProfile === 'false') {
      navigate(APP_ROUTES_PATH.LOGIN);
      return;
    }
    // if (!isAuth) {
    //   navigate(APP_ROUTES_PATH.REGISTRATION);
    //   return;
    // }

    // if (!isProfile) {
    //   navigate(APP_ROUTES_PATH.LOGIN);
    //   return;
    // }
  }, []);

  return (
    <CommonAccountLayout>
      <Routes>
        {Object.entries(accountRouteConfig).map(([routeKey, { path, element }]) => (
          <Route key={routeKey} path={path} element={element} />
        ))}
        <Route path="*" element={<Cards />} />
      </Routes>
    </CommonAccountLayout>
  );
};

export default AccountRouter;
