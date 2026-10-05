import { useCallback, useEffect, useState } from 'react';

import { CHARACTERS_URL } from '../constants/api';
import useFetchData from './useFetchData';

const STATUS_LABELS = { Alive: 'Vivo', Dead: 'Muerto', unknown: 'Desconocido' };
const GENDER_LABELS = {
  Male: 'Masculino',
  Female: 'Femenino',
  Genderless: 'Sin género',
  unknown: 'Desconocido',
};

// La API no trae "descripción", así que se arma con los datos del personaje.
const mapCharacter = (character) => ({
  id: character.id,
  name: character.name,
  image: character.image,
  status: character.status,
  statusLabel: STATUS_LABELS[character.status] ?? 'Desconocido',
  description:
    `${character.species} · ${GENDER_LABELS[character.gender] ?? 'Desconocido'}\n` +
    `Origen: ${character.origin?.name ?? 'Desconocido'}\n` +
    `Última ubicación: ${character.location?.name ?? 'Desconocido'}`,
});

// Consume la API de Rick and Morty con paginación y devuelve solo lo que usa la interfaz.
export default function useCharacters() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  const { data, loading, error, refetch } = useFetchData(`${CHARACTERS_URL}?page=${page}`);

  useEffect(() => {
    if (!data?.results) return;

    const mapped = data.results.map(mapCharacter);

    setCharacters((previous) => {
      if (page === 1) return mapped;
      const ids = new Set(previous.map((item) => item.id));
      return [...previous, ...mapped.filter((item) => !ids.has(item.id))];
    });
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  const hasMore = Boolean(data?.info?.next);

  const loadMore = useCallback(() => {
    if (!loading && hasMore && !error) setPage((current) => current + 1);
  }, [loading, hasMore, error]);

  const refresh = useCallback(() => {
    if (page === 1) refetch();
    else setPage(1);
  }, [page, refetch]);

  const refreshing = loading && page === 1 && characters.length > 0;
  const loadingMore = loading && page > 1;

  return { characters, loading, refreshing, loadingMore, error, loadMore, refresh };
}