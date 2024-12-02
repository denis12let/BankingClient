import { APP_ROUTES, APP_ROUTES_PATH } from 'constants/app';
import About from 'pages/Main/pages/AboutPage/About';
import AccountRouter from 'pages/Account/AccountRouter';
import Calendar from 'pages/Account/pages/CalendarPage/Calendar';
import Cards from 'pages/Account/pages/CardsPage/Cards';
import ExternalTransfer from 'pages/Account/pages/ExternalTransferPage/ExternalTransfer';
import InternalTransfer from 'pages/Account/pages/InternalTransferPage/InternalTransfer';
import Services from 'pages/Account/pages/ServicesPage/Services';
import Transaction from 'pages/Account/pages/TransactionPage/Transaction';
import Transactions from 'pages/Account/pages/TransactionsPage/Transactions';
import Auth from 'pages/AuthPage/Auth';
import Deposit from 'pages/Main/pages/DepositPage/Deposit';
import Deposits from 'pages/Main/pages/DepositsPage/Deposits';
import Loan from 'pages/Main/pages/LoanPage/Loan';
import Loans from 'pages/Main/pages/LoansPage/Loans';
import MainRouter from 'pages/Main/MainRouter';
import NotFound from 'pages/NotFoundPage/NotFound';
import Partner from 'pages/Main/pages/PartnerPage/Partner';
import Profile from 'pages/Account/pages/ProfilePage/Profile';
import Main from 'pages/Main/pages/MainPage/Main';

export const routeConfig = {
  [APP_ROUTES.MAIN]: {
    path: APP_ROUTES_PATH.MAIN + '/*',
    element: <MainRouter />,
  },
  [APP_ROUTES.REGISTRATION]: {
    path: APP_ROUTES_PATH.REGISTRATION,
    element: <Auth />,
  },
  [APP_ROUTES.LOGIN]: {
    path: APP_ROUTES_PATH.LOGIN,
    element: <Auth />,
  },
  [APP_ROUTES.ACCOUNT]: {
    path: APP_ROUTES_PATH.ACCOUNT + '/*',
    element: <AccountRouter />,
  },
  [APP_ROUTES.NOT_FOUND]: {
    path: APP_ROUTES_PATH.NOT_FOUND,
    element: <NotFound />,
  },
};

export const bankRouteConfig = {
  [APP_ROUTES.MAIN]: {
    path: APP_ROUTES_PATH.MAIN,
    element: <Main />,
  },
  [APP_ROUTES.ABOUT]: {
    path: APP_ROUTES_PATH.ABOUT,
    element: <About />,
  },
  [APP_ROUTES.LOANS]: {
    path: APP_ROUTES_PATH.LOANS,
    element: <Loans />,
  },
  [APP_ROUTES.LOAN]: {
    path: APP_ROUTES_PATH.LOAN + ':id',
    element: <Loan />,
  },
  [APP_ROUTES.DEPOSITS]: {
    path: APP_ROUTES_PATH.DEPOSITS,
    element: <Deposits />,
  },
  [APP_ROUTES.DEPOSIT]: {
    path: APP_ROUTES_PATH.DEPOSIT + ':id',
    element: <Deposit />,
  },
  [APP_ROUTES.PARTNER]: {
    path: APP_ROUTES_PATH.PARTNER + ':id',
    element: <Partner />,
  },
};

export const accountRouteConfig = {
  [APP_ROUTES.SETTINGS]: {
    path: APP_ROUTES_PATH.SETTINGS,
    element: <Profile />,
  },
  [APP_ROUTES.CARD]: {
    path: APP_ROUTES_PATH.CARD,
    element: <Cards />,
  },
  [APP_ROUTES.USER_SERVICES]: {
    path: APP_ROUTES_PATH.USER_SERVICES,
    element: <Services />,
  },
  [APP_ROUTES.INTERNAL_TRANSFER]: {
    path: APP_ROUTES_PATH.INTERNAL_TRANSFER,
    element: <InternalTransfer />,
  },
  [APP_ROUTES.EXTERNAL_TRANSFER]: {
    path: APP_ROUTES_PATH.EXTERNAL_TRANSFER,
    element: <ExternalTransfer />,
  },
  [APP_ROUTES.CALENDAR]: {
    path: APP_ROUTES_PATH.CALENDAR,
    element: <Calendar />,
  },
  [APP_ROUTES.TRANSACTIONS]: {
    path: APP_ROUTES_PATH.TRANSACTIONS,
    element: <Transactions />,
  },
  [APP_ROUTES.TRANSACTION]: {
    path: APP_ROUTES_PATH.TRANSACTION + ':id',
    element: <Transaction />,
  },
};
