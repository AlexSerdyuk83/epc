import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './router';

const AppRouter: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
