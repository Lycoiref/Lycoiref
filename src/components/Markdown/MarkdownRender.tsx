'use client'
import ThemeChanger from '@/components/DarkTheme/ThemeChanger'
import { useEffect, useState, useMemo } from 'react'
import MarkdownIt from 'markdown-it'
import Container from 'markdown-it-container'
import Anchor from 'markdown-it-anchor'
import NamedCodeBlocks from 'markdown-it-named-code-blocks'
import Toc from 'markdown-it-toc-done-right'
import uslug from 'uslug'
import hljs from 'highlight.js'

interface MarkdownMeta {
  data: {
    title: string
    description: string
    date: string
  }
  content: string
}

const legacySlugify = (s: string) => {
  return uslug(s, { allowedChars: '.' })
}

const createMarkdownInstance = () => {
  const md = new MarkdownIt({
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value
        } catch (err) {
          console.error('Highlight error:', err)
        }
      }
      return ''
    },
    html: false,
    xhtmlOut: true,
    typographer: true,
  })

  // 添加插件
  md.use(NamedCodeBlocks)
    .use(Anchor, {
      permalink: Anchor.permalink.linkInsideHeader({
        placement: 'before',
        // style: 'visually-hidden',
      }),
    })
    .use(Toc, {
      slugify: legacySlugify,
      containerClass: 'toc',
      level: [1, 2, 3],
    })

  // 添加容器插件
  const containers = ['tip', 'warning', 'danger', 'info']
  containers.forEach((name) => {
    md.use(Container, name, {
      render: (tokens, idx) => {
        return tokens[idx].nesting === 1 ? `<div class="${name}">` : '</div>\n'
      },
    })
  })

  return md
}

export default function MarkdownRender({ slug }: { slug: string }) {
  const [theme, setTheme] = useState('light')
  const [markdownMeta, setMarkdownMeta] = useState<MarkdownMeta | null>(null)
  const [renderedContent, setRenderedContent] = useState<string | null>(null)

  // 初始化主题
  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
      return
    }
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  // 创建 markdown 实例
  const md = useMemo(() => createMarkdownInstance(), [])

  // 获取文章内容
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/blog/${slug}`)
        const { markdownMeta } = await res.json()
        setMarkdownMeta(markdownMeta)

        if (markdownMeta?.content) {
          setRenderedContent(md.render(String(markdownMeta.content)))
        }
      } catch (error) {
        console.error('Failed to fetch markdown content:', error)
      }
    }

    fetchData()
  }, [slug, md])

  if (!markdownMeta || !renderedContent) {
    return null
  }

  return (
    <div id="article-page" data-theme={theme}>
      <header className="markdown-header">
        <div className="header-content">
          <h1 className="article-title">{markdownMeta.data.title}</h1>
          <p className="article-description">{markdownMeta.data.description}</p>
          <div className="article-meta">
            {/* <time dateTime={markdownMeta.data.date}>{formattedDate}</time> */}
            {/* {markdownMeta.data.tags && (
              <div className="article-tags">
                {markdownMeta.data.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )} */}
          </div>
        </div>
      </header>
      <div className="article">
        <div
          className="markdown-body"
          data-theme={theme}
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />
      </div>
      <ThemeChanger />
    </div>
  )
}
