import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  fetchCatsStart,
  fetchMoreCatsStart,
  toggleIsZoomed,
} from '../../redux/cat/cat.actions';
import { selectAllCats } from '../../redux/cat/cat.selector';
import { selectAllCategories } from '../../redux/category/category.selector';

import CategoryType from '../../types/category.type';
import Hint from '../hint/hint.component';
import { CatStyled } from './cats.styles';

import './cats.styles.scss';

const Cats: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const location: any = useLocation();
  const history: any = useHistory();

  const catsAll = useSelector(selectAllCats);
  const categoriesAll = useSelector(selectAllCategories);

  const [page, setPage] = useState(1);

  const [currentCategory, setCurrentCategory] = useState<CategoryType>({
    id: 15,
    name: null,
  });

  useEffect(() => {
    const categoryFromUrl: any = location.pathname.split('/')[2];
    const selectedCategory: any = categoriesAll?.find(
      ({ id, name }: CategoryType) => +id === +categoryFromUrl
    );
    dispatch(fetchCatsStart(page, selectedCategory?.id));
  }, []);

  useEffect(() => {
    const listenHandler = (location: Location) => {
      const { pathname } = location;
      const categoryFromUrl = pathname.split('/')[2];
      const selectedCategory: CategoryType = categoriesAll?.find(
        ({ id, name }: CategoryType) => +id === +categoryFromUrl
      );
      dispatch(fetchCatsStart(page, selectedCategory?.id));
      setCurrentCategory(selectedCategory as CategoryType);
    };

    const unlisten = history.listen(listenHandler);

    return unlisten;
  }, [categoriesAll, history]);

  return (
    <div>
      {!catsAll.length ? (
        <h1 className='no-cats'>No cats</h1>
      ) : (
        <>
          <Hint />
          <div className='cats'>
            {catsAll.map(({ url, id, isZoomed }: any) => (
              <CatStyled
                onClick={() => dispatch(toggleIsZoomed(id))}
                className='cat'
                isZoomed={isZoomed}
                src={url}
                key={id}
                alt='cat-img'
              />
            ))}
          </div>
        </>
      )}
      <button
        onClick={() => {
          setPage(page + 1);
          dispatch(fetchMoreCatsStart(page + 1, currentCategory?.id as number));
        }}
      >
        <p>load more</p>
      </button>
    </div>
  );
};

export default Cats;
