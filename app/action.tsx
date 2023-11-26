"use server";

import AnimeCard, { IAnimeProp } from "@/components/AnimeCard";
import { BASE_URL } from "@/lib/constants";

const MAX_LIMIT = 8;

export async function fetchAnime(page: number) {
  const response = await fetch(
    `${BASE_URL}/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );

  const data = await response.json();

  return data.map((anime: IAnimeProp, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
}