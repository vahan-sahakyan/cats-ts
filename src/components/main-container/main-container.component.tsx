import React from 'react';
import './main-container.styles.scss';
import Spinner from '../spinner/spinner.component';

const CatsLazy = React.lazy(() => import('../cats/cats.component'));

const MainContainer: React.FC = (): JSX.Element => {
  return (
    <div className='main-container'>
      <React.Suspense fallback={<Spinner />}>
        <CatsLazy />
      </React.Suspense>
    </div>
  );
};
export default MainContainer;
