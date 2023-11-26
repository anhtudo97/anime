'use server';

import { BASE_URL } from '@/lib/constants';

export const fetchAnimes = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}/api/animes?page=${page}&limit=8&order=popularity`,
  );

  const data = await response.json();

  return data;
};
