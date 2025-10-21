// src/hooks/useFavorites.ts
import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY_PREFIX = 'sf-favs:';

export function useFavorites(key: string) {
  const storageKey = useMemo(() => STORAGE_KEY_PREFIX + key, [key]);
  const [ids, setIds] = useState<string[]>([]);

  // carregar favoritos ao iniciar
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setIds(JSON.parse(raw));
    } catch {}
  }, [storageKey]);

  // persistir alterações
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(ids));
    } catch {}
  }, [storageKey, ids]);

  const isFav = (id: string) => ids.includes(id);

  const toggle = (id: string) =>
    setIds((prev) => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));

  const clear = () => setIds([]);

  return { ids, isFav, toggle, clear };
}
