import type { AxiosResponse } from 'axios';
import instance from '.';

type PaginationType = {
  limit: string;
  offset: string;
};

const getPagination = async (options: PaginationType): Promise<AxiosResponse> => {
  const response = await instance.get(`pokemon/?limit=${options.limit}&offset=${options.offset}`);

  return response;
};

export default getPagination;
