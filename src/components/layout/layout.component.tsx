import React from 'react';
import MainContainer from '../main-container/main-container.component';
import Sidebar from '../sidebar/sidebar.component';
import './layout.styles.scss';

const Layout: React.FC = (): JSX.Element => {
  return (
    <div className='layout'>
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Layout;
