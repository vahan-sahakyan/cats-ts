import React from 'react';
import './layout.styles.scss';
import MainContainer from '../main-container/main-container.component';
import Sidebar from '../sidebar/sidebar.component';
import { Route, Switch } from 'react-router-dom';

const ChooseMessage: React.FC = (): JSX.Element => (
  <h1 style={{ textAlign: 'center', margin: '4rem', color: '#3332' }}>
    CHOOSE A CATEGORY
  </h1>
);
const Layout: React.FC = (): JSX.Element => {
  return (
    <div className='layout'>
      <Sidebar />
      <Switch>
        <Route exact path='/' component={ChooseMessage} />
        <Route exact path='/cats' component={ChooseMessage} />
        <Route exact path='/cats/:categoryId' component={MainContainer} />
      </Switch>
    </div>
  );
};

export default Layout;
