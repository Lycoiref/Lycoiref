'use client'
// 主题切换的按钮
import React from 'react'
import style from './changer.module.scss'

const themes = ['light', 'dark']

const getTheme = (window) => {
  const theme = window.localStorage.getItem('theme')
  if (themes.includes(theme)) {
    return theme
  }
  return 'light'
}

const setTheme = (theme) => {
  localStorage.setItem('theme', theme)
  // 选取所有有 data-theme 属性的元素
  const themeElements = document.querySelectorAll('[data-theme]')
  for (let i = 0; i < themeElements.length; i++) {
    const themeElement = themeElements[i]
    // 设置元素的 data-theme 属性
    themeElement.setAttribute('data-theme', theme)
  }
}

export default function ThemeChanger() {
  const toggleTheme = () => {
    return () => {
      const theme = getTheme(window)
      const nextTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(nextTheme)
    }
  }

  return (
    <div
      className={style.themeChanger}
      data-theme="light"
      onClick={toggleTheme()}
    >
      <i className={['bi-sun-fill', style.sunIcon].join(' ')}></i>
      <i className={['bi-moon-fill', style.moonIcon].join(' ')}></i>
    </div>
  )
}
