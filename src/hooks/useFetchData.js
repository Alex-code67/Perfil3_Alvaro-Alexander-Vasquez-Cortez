import { useCallback, useEffect, useState } from 'react';

// Hook genérico: hace GET a una URL y expone el estado de la petición.
export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (signal) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(`La API respondió con estado ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        // La petición se cancela cuando la pantalla se desmonta; no es un error real.
        if (err.name === 'AbortError') return;
        setError('No se pudo cargar la información. Revisa tu conexión e inténtalo de nuevo.');
      } finally {
        if (!signal?.aborted) setLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);

    return () => controller.abort();
  }, [fetchData]);

  const refetch = useCallback(() => fetchData(), [fetchData]);

  return { data, loading, error, refetch };
}
