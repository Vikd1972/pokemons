import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useSearchParams } from 'react-router-dom';

import PaginationPokemonsWrapper from './PaginationPokemons.styles';
import getPagination from '../../../../api/getPagination';

interface IOption {
  limit: number;
}

export const PaginationPokemons: React.FC<IOption> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPagination();
        setCount(Math.ceil(response.data.count / props.limit));
      } catch (err) {
        console.error(err);
      }
    })();
  }, [props.limit]);

  const changePage = async (event: React.ChangeEvent<unknown>, value: number) => {
    searchParams.set('page', String(value));
    setSearchParams(searchParams);
  };

  return (
    <PaginationPokemonsWrapper>
      <Pagination
        count={count}
        page={Number(searchParams.get('page')) || 1}
        onChange={changePage}
        defaultPage={1}
        siblingCount={3}
        size="large"
        shape="rounded"
      />
    </PaginationPokemonsWrapper >
  );
};

export default PaginationPokemons;
