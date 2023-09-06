import ReactPlayer from 'react-player'

import { Loader } from 'lucide-react'
import { useCurrentLesson, useStore } from '../zustand-store'

export function Video() {
  const { next, isloading } = useStore((store) => {
    return {
      next: store.next,
      isloading: store.isloading,
    }
  })
  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    next()
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isloading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-14 h-14 text-blue-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  )
}
