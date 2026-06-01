import { useMemo, useState } from 'react';
import type { MemoramaPair } from '@/types';
import Icon from '@/components/Icon';

interface MemoramaProps {
  intro: string;
  pairs: MemoramaPair[];
  reflectionMessage: string;
}

interface Card {
  key: number;
  pairId: number;
  text: string;
}

function buildDeck(pairs: MemoramaPair[]): Card[] {
  const cards: Card[] = [];
  pairs.forEach((pair, pairId) => {
    cards.push({ key: pairId * 2, pairId, text: pair.a });
    cards.push({ key: pairId * 2 + 1, pairId, text: pair.b });
  });
  // Mezcla (Fisher–Yates)
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

// Memorama NO competitivo: sin puntaje, sin cronómetro, sin ganar/perder.
// Solo relacionar ideas de la cápsula; al completar, un mensaje reflexivo.
export default function Memorama({ intro, pairs, reflectionMessage }: MemoramaProps) {
  const [seed, setSeed] = useState(0);
  const deck = useMemo(() => buildDeck(pairs), [pairs, seed]);

  const [revealed, setRevealed] = useState<number[]>([]); // índices boca arriba sin emparejar
  const [matched, setMatched] = useState<number[]>([]); // pairId emparejados
  const [busy, setBusy] = useState(false);

  const isMatched = (card: Card) => matched.includes(card.pairId);
  const isFaceUp = (i: number) => revealed.includes(i) || isMatched(deck[i]);
  const completed = matched.length === pairs.length;

  const handleFlip = (i: number) => {
    if (busy || isFaceUp(i)) return;
    const next = [...revealed, i];

    if (next.length < 2) {
      setRevealed(next);
      return;
    }

    setRevealed(next);
    setBusy(true);
    const [a, b] = next;
    if (deck[a].pairId === deck[b].pairId) {
      // Pareja correcta
      setMatched((m) => [...m, deck[a].pairId]);
      setRevealed([]);
      setBusy(false);
    } else {
      // No coinciden: se vuelven a ocultar tras un momento
      window.setTimeout(() => {
        setRevealed([]);
        setBusy(false);
      }, 900);
    }
  };

  const restart = () => {
    setRevealed([]);
    setMatched([]);
    setBusy(false);
    setSeed((s) => s + 1);
  };

  return (
    <div className="card p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
        Memorama · actividad opcional
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold text-ink-900">Relaciona las ideas</h3>
      <p className="mt-1 text-sm text-ink-600">{intro}</p>
      <p className="mt-1 text-xs text-ink-400">Sin tiempo ni puntaje: tómatelo con calma.</p>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {deck.map((card, i) => {
          const faceUp = isFaceUp(i);
          const done = isMatched(card);
          return (
            <button
              key={card.key}
              type="button"
              onClick={() => handleFlip(i)}
              disabled={done || busy}
              aria-label={faceUp ? card.text : 'Carta oculta'}
              className={`flex min-h-[5.5rem] items-center justify-center rounded-xl p-3 text-center text-sm transition-colors ${
                done
                  ? 'bg-primary-100 text-primary-800 ring-1 ring-primary-200'
                  : faceUp
                    ? 'bg-white text-ink-800 ring-1 ring-primary-300'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              {faceUp ? (
                <span className="leading-snug">{card.text}</span>
              ) : (
                <Icon name="leaf" className="h-6 w-6 opacity-80" />
              )}
            </button>
          );
        })}
      </div>

      {completed && (
        <div
          className="mt-5 flex items-start gap-3 rounded-xl bg-sand-50 p-4 text-sm leading-relaxed text-ink-700 ring-1 ring-sand-200"
          role="status"
        >
          <Icon name="sparkles" className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
          <div>
            <p>{reflectionMessage}</p>
            <button
              type="button"
              onClick={restart}
              className="mt-2 text-xs font-medium text-primary-700 underline-offset-2 hover:underline"
            >
              Jugar de nuevo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
