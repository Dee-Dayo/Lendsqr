import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/navBar';

const Layout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;