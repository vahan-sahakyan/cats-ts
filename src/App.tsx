import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Spinner from './components/spinner/spinner.component';

import State from './redux/state.interface';

const LayoutLazy = React.lazy(
  () => import('./components/layout/layout.component')
);

const App: React.FC = () => {
  const isLoading = useSelector((state: State) => state.cat.loading);
  return (
    <div className='App'>
      {isLoading && <Spinner />}
      <React.Suspense fallback={<Spinner />}>
        <LayoutLazy />
      </React.Suspense>
    </div>
  );
};

export default App;
