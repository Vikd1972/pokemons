import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { useSearchParams } from 'react-router-dom';

import getPagination from '../../../../api/getPagination';

import PaginationPokemons from './PaginationPokemons.styles';

export const ListPokemons: React.FC = () => {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState('0');
  const [searchParams, setSearchParams] = useSearchParams();

  const limit = '12';

  useEffect(() => {
    (async () => {
      try {
        const response = await getPagination({
          offset,
          limit,
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [offset]);

  const onSkip = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    searchParams.set('page', String(value));
    searchParams.set('limit', String(limit));
    setSearchParams(searchParams);
  };

  return (
    <PaginationPokemons>
      <Pagination
        count={100}
        page={page}
        onChange={onSkip}
        defaultPage={1}
        siblingCount={2}
        size="large"
        shape="rounded"
      />
    </PaginationPokemons >
  );
};

export default PaginationPokemons;
