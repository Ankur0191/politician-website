'use client'
import { useEffect } from 'react'

export default function ParticlesBackground() {
  useEffect(() => {
    const container = document.getElementById('particles')
    if (!container) return

    for (let i = 0; i < 50; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const size = Math.random() * 6 + 2
      p.style.width = size + 'px'
      p.style.height = size + 'px'
      p.style.left = Math.random() * 100 + '%'
      p.style.top = Math.random() * 100 + '%'
      p.style.animationDelay = Math.random() * 6 + 's'
      p.style.animationDuration = Math.random() * 4 + 4 + 's'
      container.appendChild(p)
    }
  }, [])

  return <div id="particles" className="bg-particles" />
}
