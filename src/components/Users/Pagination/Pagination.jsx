import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Pagination.css';

export default function Pagination(props) {
  const [totalUsersCount, pageSize, currentPage, pageChanged] = props.data;
  const pages = usePages(totalUsersCount, pageSize, currentPage);
  const dispatch = useDispatch();

  const getStyle = p =>
    currentPage === p ? 'users__page users__page_selected' : 'users__page';

  return (
    <div className='users__pagination'>
      <span
        onClick={() => dispatch(pageChanged(currentPage - 1))}
        className='users__page'
      >
        {'<<'}
      </span>
      {pages.map(p => (
        <span
          key={p}
          onClick={() => dispatch(pageChanged(p))}
          className={getStyle(p)}
        >
          {p}
        </span>
      ))}
      <span
        onClick={() => dispatch(pageChanged(currentPage + 1))}
        className='users__page'
      >
        {'>>'}
      </span>
    </div>
  );
}

function usePages(totalCount, pageSize, currentPage) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let minPage = 1;
    if (pagesCount > 11) {
      if (currentPage > 5) {
        minPage = currentPage - 5;
      }
      if (currentPage >= pagesCount - 5) {
        minPage = pagesCount - 10;
      }
      pagesCount = 11;
    }
    setPages([...Array(pagesCount)].map(i => minPage++));
  }, [currentPage]);

  return pages;
}
