import { useEffect, useRef, useState } from 'react'
import type { AlumniMember } from '../data/alumni'
import { AlumniCard } from './AlumniCard'
import './AlumniCarousel.css'

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      aria-hidden="true"
      className={`alumni-carousel__arrow-icon alumni-carousel__arrow-icon--${direction}`}
    >
      <path d="m7 4 6 6-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  )
}

export function AlumniCarousel({
  members,
  year,
}: {
  members: AlumniMember[]
  year: AlumniMember['graduationYear']
}) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(5)
  const maxIndex = Math.max(0, members.length - visibleCount)

  useEffect(() => {
    const updateLayout = () => {
      const nextVisibleCount = window.innerWidth > 1040 ? 5 : window.innerWidth > 640 ? 3 : 1
      setVisibleCount(nextVisibleCount)
      setIndex(0)
      viewportRef.current?.scrollTo({ left: 0 })
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  const moveTo = (nextIndex: number) => {
    const boundedIndex = Math.max(0, Math.min(nextIndex, maxIndex))
    const target = trackRef.current?.children[boundedIndex] as HTMLElement | undefined

    setIndex(boundedIndex)
    viewportRef.current?.scrollTo({
      left: target?.offsetLeft ?? 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="alumni-carousel">
      <div
        className="alumni-carousel__viewport"
        ref={viewportRef}
        role="region"
        aria-label={`Class of ${year} alumni`}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') moveTo(index - 1)
          if (event.key === 'ArrowRight') moveTo(index + 1)
        }}
      >
        <div className="alumni-carousel__track" ref={trackRef}>
          {members.map((member) => (
            <AlumniCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {index > 0 ? (
        <button
          className="alumni-carousel__button alumni-carousel__button--left"
          type="button"
          aria-label={`Show previous Class of ${year} alumnus`}
          onClick={() => moveTo(index - 1)}
        >
          <ArrowIcon direction="left" />
        </button>
      ) : null}

      {index < maxIndex ? (
        <button
          className="alumni-carousel__button alumni-carousel__button--right"
          type="button"
          aria-label={`Show next Class of ${year} alumnus`}
          onClick={() => moveTo(index + 1)}
        >
          <ArrowIcon direction="right" />
        </button>
      ) : null}
    </div>
  )
}
