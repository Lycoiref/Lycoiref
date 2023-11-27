'use client'
import React from 'react'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    const video = document.querySelector('video')
    video.volume = 0.7
  }, [])
  const osts = [
    'https://blog-1301952160.cos.ap-shanghai.myqcloud.com/Lycoiref/BlueArchive/4.5pv.mp4',
    'https://blog-1301952160.cos.ap-shanghai.myqcloud.com/Lycoiref/ProjectSekai/NEO.mp4',
  ]
  const ost = osts[Math.floor(Math.random() * osts.length)]

  return (
    <div
      className="page w-screen h-screen overflow-hidden"
      onClick={() => document.querySelector('video').play()}
    >
      <video className="w-full h-full object-cover" src={ost} autoPlay></video>
    </div>
  )
}
