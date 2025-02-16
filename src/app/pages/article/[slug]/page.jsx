/* eslint-disable react-refresh/only-export-components */
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import './toc.scss'
import MarkdownRender from '../../../../components/Markdown/MarkdownRender'
import { getMarkdownFiles } from '@/utils/markdownUtils'


export const dynamicParams = true

export async function generateStaticParams() {
  let MDs = await getMarkdownFiles()
  const slugs = []
  // 去除非md文件
  MDs = MDs.filter((slug) => slug.endsWith('.md'))
  MDs.map((md) => {
    slugs.push({
      slug: encodeURIComponent(md.replace(/\.md$/, '')),
    })
  })
  return slugs
}

export default function MarkdownPage({ params }) {

  return <MarkdownRender slug={params.slug} />
}
