import { useState } from 'react';
import type { ReflectiveExercise as Exercise } from '@/types';
import Icon from '@/components/Icon';

interface ReflectiveExerciseProps {
  exercise: Exercise;
}

// Ejercicio reflexivo: NO hay respuestas correctas, no se califica,
// no genera puntuación ni avance. Al elegir cualquier opción se muestra
// un mensaje reflexivo. La persona puede cambiar su respuesta libremente.
export default function ReflectiveExercise({ exercise }: ReflectiveExerciseProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const answered = selected !== null;

  return (
    <div className="card p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
        Reflexión opcional
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold text-ink-900">{exercise.prompt}</h3>
      <p className="mt-1 text-sm text-ink-500">
        No hay respuestas correctas. Solo es una invitación a pensar.
      </p>

      <fieldset className="mt-5 space-y-2.5">
        <legend className="sr-only">{exercise.prompt}</legend>
        {exercise.options.map((option) => {
          const isActive = selected === option.id;
          return (
            <label
              key={option.id}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                isActive
                  ? 'border-primary-400 bg-primary-50 text-primary-800'
                  : 'border-ink-200 bg-white text-ink-700 hover:border-primary-200 hover:bg-primary-50/40'
              }`}
            >
              <input
                type="radio"
                name={exercise.id}
                value={option.id}
                checked={isActive}
                onChange={() => setSelected(option.id)}
                className="h-4 w-4 accent-primary-600"
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </fieldset>

      {answered && (
        <div
          className="mt-5 flex items-start gap-3 rounded-xl bg-sand-50 p-4 text-sm leading-relaxed text-ink-700 ring-1 ring-sand-200"
          role="status"
        >
          <Icon name="leaf" className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
          <div>
            <p>{exercise.reflectionMessage}</p>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-2 text-xs font-medium text-primary-700 underline-offset-2 hover:underline"
            >
              Pensarlo de nuevo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
