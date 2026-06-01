import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

// Seguimiento ligero — SOLO local y anónimo.
// Guarda en localStorage del propio navegador:
//   1. La última cápsula visitada (para ofrecer "continuar donde lo dejaste").
//   2. El conjunto de cápsulas exploradas (indicador visual de "ya lo viste").
// No hay porcentajes, niveles, rachas ni barras competitivas.
// No se envía nada a ningún servidor. La persona puede borrarlo cuando quiera.

const STORAGE_KEY = 'corresponsabilidad.exploracion.v1';

interface ExplorationState {
  exploredCapsuleIds: string[];
  lastCapsuleId: string | null;
}

interface ExplorationContextValue extends ExplorationState {
  markExplored: (capsuleId: string) => void;
  isExplored: (capsuleId: string) => boolean;
  reset: () => void;
  hasData: boolean;
}

const empty: ExplorationState = { exploredCapsuleIds: [], lastCapsuleId: null };

const ExplorationContext = createContext<ExplorationContextValue | null>(null);

function readStorage(): ExplorationState {
  if (typeof window === 'undefined') return empty;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as Partial<ExplorationState>;
    return {
      exploredCapsuleIds: Array.isArray(parsed.exploredCapsuleIds)
        ? parsed.exploredCapsuleIds
        : [],
      lastCapsuleId: typeof parsed.lastCapsuleId === 'string' ? parsed.lastCapsuleId : null,
    };
  } catch {
    return empty;
  }
}

export function ExplorationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ExplorationState>(readStorage);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* almacenamiento no disponible: la experiencia sigue funcionando */
    }
  }, [state]);

  const markExplored = useCallback((capsuleId: string) => {
    setState((prev) => ({
      lastCapsuleId: capsuleId,
      exploredCapsuleIds: prev.exploredCapsuleIds.includes(capsuleId)
        ? prev.exploredCapsuleIds
        : [...prev.exploredCapsuleIds, capsuleId],
    }));
  }, []);

  const isExplored = useCallback(
    (capsuleId: string) => state.exploredCapsuleIds.includes(capsuleId),
    [state.exploredCapsuleIds],
  );

  const reset = useCallback(() => setState(empty), []);

  const value = useMemo<ExplorationContextValue>(
    () => ({
      ...state,
      markExplored,
      isExplored,
      reset,
      hasData: state.exploredCapsuleIds.length > 0,
    }),
    [state, markExplored, isExplored, reset],
  );

  return <ExplorationContext.Provider value={value}>{children}</ExplorationContext.Provider>;
}

export function useExploration(): ExplorationContextValue {
  const ctx = useContext(ExplorationContext);
  if (!ctx) {
    throw new Error('useExploration debe usarse dentro de <ExplorationProvider>');
  }
  return ctx;
}
