import 'github-markdown-css'
import './toc.scss'
import { getMarkdownFileBySlug } from '@/utils/markdownUtils'
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import rehypeRaw from 'rehype-raw' // 解析标签，支持html语法
// import rehypeToc from 'rehype-toc' // 生成目录
// import SyntaxHighlighterSever from '@/components/SyntaxHighlighterSever'
// TOFIX: 全部换成markdown-it
import MarkdownIt from 'markdown-it'
import Container from 'markdown-it-container'
import Anchor from 'markdown-it-anchor'
import Toc from 'markdown-it-toc-done-right'
import string from 'string'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

function legacySlugify(s) {
  return string(s).slugify().toString()
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
    .use(Anchor, {
      permalink: Anchor.permalink.linkInsideHeader({
        placement: 'before',
        style: 'visually-hidden',
      }),
    })
    .use(Toc, {
      slugify: legacySlugify,
      containerClass: 'toc',
      level: [2, 3],
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
  let result = md.render(content)
  console.log(result)
  return (
    <div id="article-page">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* <p>{data.date.toLocaleDateString()}</p> */}
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: result }}
      ></div>
    </div>
  )
  // let { frontmatter, contentHtml } = md
  // return (
  //   <div id="article-page">
  //     <h1>{data.title}</h1>
  //     <p>{data.description}</p>
  //     <p>{data.date.toLocaleDateString()}</p>
  //     <ReactMarkdown
  //       remarkPlugins={[remarkGfm]}
  //       rehypePlugins={[rehypeRaw, rehypeToc]}
  //       components={{
  //         code({ node, inline, className, children, ...props }) {
  //           console.log(node)
  //           return inline ? (
  //             <code className={className} {...props}>
  //               {children}
  //             </code>
  //           ) : (
  //             <SyntaxHighlighterSever className={className}>
  //               {String(children).replace(/\n$/, '')}
  //             </SyntaxHighlighterSever>
  //           )
  //         },
  //       }}
  //     >
  //       {md.content}
  //     </ReactMarkdown>
  //   </div>
  // )
}
