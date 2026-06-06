import React from 'react'

const PhotoCard = () => {
  return (
    <div className={`bg-surface rounded-xl border border-border overflow-hidden`}>
      <img className="w-full h-full object-cover" src="/Me.png" alt="Me" />
    </div>
  )
}

export default PhotoCard
