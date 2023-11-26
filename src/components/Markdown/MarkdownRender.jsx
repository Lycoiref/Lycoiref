'use client'
import ThemeChanger from '@/components/DarkTheme/ThemeChanger'
import { useEffect, useState } from 'react'
// import { useContext, createContext } from 'react'
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import rehypeRaw from 'rehype-raw' // 解析标签，支持html语法
// import rehypeToc from 'rehype-toc' // 生成目录
// import SyntaxHighlighterSever from '@/components/SyntaxHighlighterSever'
// TOFIX: 全部换成markdown-it
import MarkdownIt from 'markdown-it'
import Container from 'markdown-it-container'
import Anchor from 'markdown-it-anchor'
import NamedCodeBlocks from 'markdown-it-named-code-blocks'
import Toc from 'markdown-it-toc-done-right'
import uslug from 'uslug'
import hljs from 'highlight.js'

function legacySlugify(s) {
  // console.log(string(s))
  let url = uslug(s, {
    allowedChars: '.',
  })
  return url
}

export default function MarkdownRender({ slug }) {

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


  const [data, setData] = useState(null)
  // Remove unused state variable and setter function
  // const [md, setMd] = useState(null);
  const [content, setContent] = useState(null)
  const [result, setResult] = useState(null)

  useEffect(() => {
    async function fetchData() {
      let res = await fetch(`/api/blog/${slug}`)
      let data = await res.json()
      let markdownMeta = data.markdownMeta
      // console.log(markdownMeta)
      setData(markdownMeta.data)
      setContent(markdownMeta.content)
      if (!markdownMeta) {
        return
      }
      let md = new MarkdownIt({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(str, { language: lang }).value
            } catch (__) {
              console.log(__)
            }
          }
          return '' // use external default escaping
        },
        html: false,
        xhtmlOut: true,
        typographer: true,
      })
        .use(NamedCodeBlocks)
        .use(Anchor, {
          permalink: Anchor.permalink.linkInsideHeader({
            placement: 'before',
            style: 'visually-hidden',
          }),
        })
        .use(Toc, {
          slugify: legacySlugify,
          containerClass: 'toc',
          level: [1, 2, 3],
        })
        .use(Container, 'tip', {
          render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
              return '<div class="tip">'
            } else {
              return '</div>\n'
            }
          },
        })
        .use(Container, 'warning', {
          render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
              return '<div class="warning">'
            } else {
              return '</div>\n'
            }
          },
        })
        .use(Container, 'danger', {
          render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
              return '<div class="danger">'
            } else {
              return '</div>\n'
            }
          },
        })
        .use(Container, 'info', {
          render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
              return '<div class="info">'
            } else {
              return '</div>\n'
            }
          },
        })
      setResult(md.render(String(content)))
      // console.log(data)
    }

    fetchData()
  }, [content, slug])

  return (result &&
    <div id="article-page" data-theme={theme}>
      <div className="header">
        {data && <><h1>{data.title}</h1>
          <div>{data.description}</div>
          <div>{data.date}</div></>}
      </div>
      <div className="article">
        <div
          className="markdown-body"
          data-theme={theme}
          dangerouslySetInnerHTML={{ __html: result }}
        ></div>
      </div>
      <ThemeChanger />
    </div>
  )
}
