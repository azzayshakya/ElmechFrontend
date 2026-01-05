import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './userAuthentication/context/AuthContext';
import {
  ProtectedRoute,
  ProtectedLoginRoute,
} from './userAuthentication/ProtectRoute/ProtectedRoutes';

import AuthUiLayout from './Layouts/AuthUiLayout';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import HomePageMain from './Pages/HomePage/HomePageMain';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import PrivacyPolicy from './Pages/privacyPolicy/PrivacyPolicyPage';
import TermsAndConditions from './Pages/termAndConditions/TermsAndCondtions';
import GetInTouchMain from './Forms/GetInTouchForm/GetInTouchMain';
import AddYourCommentsMain from './Forms/AddYourComments/AddYourCommentsMain';
import UpdatesPage from './Pages/WebSiteUpdates/WebsiteUpdates';
import LoginFormMain from './auth/login/LoginFormMain';
import AboutUsPage from './components/aboutUs/AboutUsPage';
import GetAllYourCommentsMain from './AdminPages/GetAllUserComments/GetAllYourCommentsMain';
import GetAllUserQueriesMain from './AdminPages/GetAllUserQueries/GetAllUserQueriesMain';

import { Toaster } from 'react-hot-toast';
import ServicesPage from './components/services/ServicesPage';
import GetInTouchPage from './Forms/GetInTouchForm/GetInTouchPage';
import CreateAccountMain from './auth/create-account/CreateAccountMain';
import UpdateComingSoonPage from './Pages/SiteUnderUpdate/SiteUnderUpdate';
import HeroSliderDummy from './dummy';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthUiLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePageMain /> },
      { path: '/aboutUs', element: <AboutUsPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/getInTouch', element: <GetInTouchPage /> },
      { path: '/addYourComment', element: <AddYourCommentsMain /> },
      { path: '/termsAndConditions', element: <TermsAndConditions /> },
      { path: '/privacyPolicy', element: <PrivacyPolicy /> },
      { path: '/new-update', element: <UpdateComingSoonPage /> },
      { path: '/dummy', element: <HeroSliderDummy /> },
      { path: '/updates', element: <UpdatesPage /> },
      { path: '/create-account', element: <CreateAccountMain /> },
      {
        path: '/login',
        element: (
          <ProtectedLoginRoute>
            <LoginFormMain />
          </ProtectedLoginRoute>
        ),
      },
      { path: '/elmech-user-comments', element: <GetAllYourCommentsMain /> },
      { path: '/elmech-user-Queries', element: <GetAllUserQueriesMain /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  // {
  //   path:"/admin",
  //   element:<AdminDashboard/>,
  //  errorElement: <ErrorPage />,
  //  children:[
  //   {path:"",
  //   element:""
  //   }
  //  ]

  // }
]);

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster position="bottom-right" />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
