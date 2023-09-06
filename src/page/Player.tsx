import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Module } from '../components/Module'
import { useEffect } from 'react'
import { useCurrentLesson, useStore } from '../zustand-store'

export function Player() {
  const { course, load, isloading } = useStore((store) => {
    return {
      course: store.course,
      load: store.load,
      isloading: store.isloading,
    }
  })

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (currentLesson)
      document.title = `${currentLesson.title} | Junior Developer`
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {isloading ? (
              <>
                <div className="flex w-full items-center gap-3 p-4 animate-pulse bg-zinc-800">
                  <div className=" flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-2 w-32 bg-slate-700 rounded"></div>
                      <div className="h-2 w-10 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center gap-3 p-4 animate-pulse bg-zinc-800">
                  <div className=" flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-2 w-32 bg-slate-700 rounded"></div>
                      <div className="h-2 w-10 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {course?.modules &&
                  course?.modules.map((module, index) => {
                    return (
                      <Module
                        key={module.id}
                        moduleIndex={index}
                        title={module.title}
                        amountOfLessons={module.lessons.length}
                      />
                    )
                  })}
              </>
            )}
          </aside>
        </main>
      </div>
    </div>
  )
}
