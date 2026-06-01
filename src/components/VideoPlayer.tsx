import { useState } from 'react';
import Icon from '@/components/Icon';

interface VideoPlayerProps {
  vimeoId: string;
  title: string;
}

// Reproductor con embed de Vimeo (Pro) cargado bajo demanda (click-to-play)
// para no descargar el iframe hasta que la persona decida verlo.
export default function VideoPlayer({ vimeoId, title }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  const src = `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&dnt=1`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-ink-900 shadow-soft">
      {playing ? (
        <iframe
          src={`${src}&autoplay=1`}
          title={title}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary-700 to-primary-900 text-white"
          aria-label={`Reproducir: ${title}`}
        >
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur transition group-hover:scale-105 group-hover:bg-white/25">
            <Icon name="play" className="h-9 w-9" />
          </span>
          <span className="max-w-sm px-6 text-center font-display text-lg font-medium">
            {title}
          </span>
          <span className="text-sm text-white/70">Reproducir video</span>
        </button>
      )}
    </div>
  );
}
