import { MessageCircle } from 'lucide-react'
import { useCurrentLesson, useStore } from '../zustand-store'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  const isloading = useStore((store) => store.isloading)

  if (isloading) {
    return (
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-3 animate-pulse">
          <div className="flex flex-col gap-1">
            <div className="w-40 h-4 my-2 bg-zinc-900 rounded-full " />
            <span className="w-48 h-2 bg-zinc-900 rounded-full" />
          </div>
        </div>
        <div className="w-40 h-7 my-2 bg-zinc-900 rounded-full " />
      </div>
    )
  }

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
        <span className="text-sm text-zinc-400">
          Módulo &quot;{currentModule?.title}&quot;
        </span>
      </div>

      <button className="flex items-center gap-2 rounded bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-600 transition duration-300 ">
        <MessageCircle className="h-4 w-4" />
        Deixar feedback
      </button>
    </div>
  )
}
