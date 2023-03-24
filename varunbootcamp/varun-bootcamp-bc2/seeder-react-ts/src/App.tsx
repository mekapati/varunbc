import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import {
  CASH_ACCELERATION,
  DASHBOARD,
  HOME_ROUTE,
  REVIEW_ROUTE,
  NEW_CASH_KICK,
} from './core-utils/routes';
import ErrorBoundary from './wrappers/ErrorBoundary';
import ThemeWrapper from './wrappers/ThemeWrapper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Login } from './pages/login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewCredit from './pages/reviewCredit';
import { Dashboard } from './pages/dashboard';
import { CashAcceleration } from './pages/cashAcceleration';
import NewCashKick from './pages/newCashKick';
import { User } from './model/User';

const queryClient = new QueryClient();
const App: React.FC = () => {
  const [user, setUser] = React.useState<any>();

  const handleLogin = (user: User) => {
    setUser(user);
  };

  const ProtectedRoute = ({ user, children }: any) => {
    if (!user) {
      return <Navigate to="/" replace />;
    }

    return children;
  };

  return (
    <React.StrictMode>
      <CssBaseline>
        <ThemeWrapper>
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
              <BrowserRouter>
                <React.Suspense fallback={<div />}>
                  <Routes>
                    <Route
                      path={HOME_ROUTE}
                      element={<Login handleLogin={handleLogin} />}
                    />
                    <Route
                      path={DASHBOARD}
                      element={
                        <ProtectedRoute user={user}>
                          <Dashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path={CASH_ACCELERATION}
                      element={
                        <ProtectedRoute user={user}>
                          <CashAcceleration />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path={NEW_CASH_KICK}
                      element={
                        <ProtectedRoute user={user}>
                          <NewCashKick />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path={REVIEW_ROUTE}
                      element={
                        <ProtectedRoute user={user}>
                          <ReviewCredit />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path={NEW_CASH_KICK}
                      element={
                        <ProtectedRoute user={user}>
                          <NewCashKick />
                        </ProtectedRoute>
                      }
                    />
                  </Routes>
                  <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                  />
                </React.Suspense>
              </BrowserRouter>
            </ErrorBoundary>
          </QueryClientProvider>
        </ThemeWrapper>
      </CssBaseline>
    </React.StrictMode>
  );
};

export default App;
