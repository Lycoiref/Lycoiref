'use client'
import './top.scss'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function TopBar() {
  const [urlPath, setUrlPath] = useState('') // 用于判断当前页面是否为music页面
  const router = useRouter()
  const goPage = (url: string) => {
    console.log(111)

    url = url === '' ? '/' : `/pages/${url}`
    setUrlPath(url)
    router.push(url)
  }
  useEffect(() => {
    setUrlPath(window.location.pathname)

    // 鼠标移动到顶部时显示topbar
    const topBar = document.querySelector('.top-bar')
    const page = document.querySelector('body')
    page.addEventListener('mousemove', (e: MouseEvent) => {
      if (window.location.pathname === '/pages/music') {
        if (e.screenY < 200) {
          topBar.classList.replace('h-0', 'h-16')
        } else {
          topBar.classList.replace('h-16', 'h-0')
        }
      }
    })
  }, [])
  useEffect(() => {
    // 在music页面隐藏topbar
    if (!urlPath) setUrlPath(window.location.pathname)
    if (!(window.location.pathname === '/pages/music')) {
      const topBar = document.querySelector('.top-bar')
      topBar.classList.replace('h-0', 'h-16')
    }
  }, [urlPath])

  return (
    <div className="w-screen overflow-hidden h-0 top-bar transition-all duration-[1s]">
      <div className="row place-items-center h-full mx-auto w-full xl:w-3/5 font-bold">
        <div className="left col flex justify-start items-center font-thin">
          <i className="bi-activity text-[25px] mr-4"></i>
          Lycoiref&#39;s Blog
        </div>
        <div className="text-center col-8 flex justify-center font-thin">
          <div className="item" onClick={() => goPage('')}>
            <i className="bi bi-house"></i>
            <div className="text">首页</div>
          </div>
          <div className="item" onClick={() => goPage('archive')}>
            {/* 点击跳转到Markdown归档页 */}
            <i className="bi bi-book"></i>
            <div className="text">归档</div>
          </div>
          <div className="item">
            <i className="bi bi-chat-left-text"></i>
            <div className="text">友链</div>
          </div>
          <div className="item">
            <i className="bi bi-image"></i>
            <div className="text">图库</div>
          </div>
          <div className="hidden xl:block">
            <div className="item">
              <i className="bi bi-music-note-list"></i>
              <div className="text" onClick={() => goPage('music')}>
                OST
              </div>
            </div>
          </div>
          {/* <div className="item">
            <i className="bi bi-person"></i>
            <div className="text" onClick={() => goPage('dlc')}>
              SBDLC
            </div>
          </div> */}
        </div>
        <div className="right col flex justify-end">
          <div
            className="
          w-[40px] h-[40px] 
          cursor-pointer 
          hover:bg-slate-300 
          rounded-full 
          flex justify-center items-center
          transition-all duration-300
          "
          >
            <i className="bi bi-search text-[20px]"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
