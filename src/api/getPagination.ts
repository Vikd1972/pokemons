/* eslint-disable no-console */
import type { AxiosResponse } from 'axios';
import instance from '.';

import type { PaginationType } from '../types';

const getPagination = async (): Promise<AxiosResponse<PaginationType>> => {
  const response = await instance.get('pokemon/');

  return response;
};

export default getPagination;
