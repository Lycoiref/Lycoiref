/* eslint-disable react-refresh/only-export-components */
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import './toc.scss'
import { getMarkdownFileBySlug, getMarkdownFiles } from '@/utils/markdownUtils'
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
import MarkdownRender from '../../../../components/Markdown/MarkdownRender'

function legacySlugify(s) {
  // console.log(string(s))
  let url = uslug(s, {
    allowedChars: '.',
  })
  return url
}

export const dynamicParams = true

export async function generateStaticParams() {
  let MDs = await getMarkdownFiles()
  let slugs = []
  // 去除非md文件
  MDs = MDs.filter((slug) => slug.endsWith('.md'))
  MDs.map((md) => {
    slugs.push({
      slug: md.replace(/\.md$/, ''),
    })
  })
  return slugs
}

export default async function MarkdownPage({ params }) {
  let markdownMeta = await getMarkdownFileBySlug(params.slug)
  let data = markdownMeta.data
  let content = markdownMeta.content
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
  let result = md.render(content)
  return <MarkdownRender data={data} content={result} />
}
