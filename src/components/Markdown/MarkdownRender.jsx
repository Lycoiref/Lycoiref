'use client'
import ThemeChanger from '@/components/DarkTheme/ThemeChanger'
import { useEffect, useState } from 'react'
// import { useContext, createContext } from 'react'

export default function MarkdownRender({ content, data }) {
  let [theme, setTheme] = useState('light')
  // TODO: 全局主题响应式切换支持
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
      return
    }
    const themeMedia = window.matchMedia('(prefers-color-scheme: light)')
    console.log(themeMedia)
    setTheme(themeMedia.matches ? 'light' : 'dark')
  }, [theme])

  return (
    <div id="article-page" data-theme={theme}>
      <div className="header">
        <h1>{data.title}</h1>
        <div>{data.description}</div>
        <div>{data.date.toLocaleDateString()}</div>
      </div>
      <div className="article">
        <div
          className="markdown-body"
          data-theme={theme}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
      <ThemeChanger />
    </div>
  )
}
