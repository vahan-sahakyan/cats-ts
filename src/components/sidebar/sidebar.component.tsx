import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCategoriesStart } from '../../redux/category/category.actions';
import './sidebar.styles.scss';
import { selectAllCategories } from '../../redux/category/category.selector';
import { AsideStyled, LinkStyled } from './sidebar.styles';

const Sidebar: React.FC = (): JSX.Element => {
  const location = useLocation();
  const { pathname } = location;

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  const categoryFromURL = pathname.split('/')[2];

  const categories = useSelector(selectAllCategories);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <AsideStyled
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      isOpen={isOpen}
      className='sidebar'
    >
      <h2>CATEGORIES</h2>

      {categories?.map(({ id, name }: any) => {
        return (
          <LinkStyled
            active={+id === +categoryFromURL ? true : undefined}
            to={`/cats/${id}`}
          >
            {name}
          </LinkStyled>
        );
      })}
    </AsideStyled>
  );
};
export default Sidebar;
