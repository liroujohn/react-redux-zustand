import { PlayCircle, Video } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
  isCurrent: boolean
  onPlay: () => void
}

export function Lesson({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-300 data-[active=true]:text-emerald-500 data-[active=true]:hover:text-emerald-600"
    >
      {isCurrent ? (
        <PlayCircle
          data-active={isCurrent}
          className="w-4 h-4 text-zinc-500 data-[active=true]:text-emerald-400"
        />
      ) : (
        <Video className="w-4 h-4 text-zinc-500 " />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
