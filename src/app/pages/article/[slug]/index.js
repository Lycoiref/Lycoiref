import { getMarkdownFileBySlug, getMarkdownFiles } from '@/utils/markdownUtils'

// 使用SSG
export async function getStaticPaths() {
  let paths = await getMarkdownFiles()
  // 只保留md文件名
  paths = paths.filter((path) => path.endsWith('.md'))

  return {
    paths: paths.map((path) => {
      return {
        params: {
          slug: path.replace(/\.md$/, ''),
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  let markdownMeta = await getMarkdownFileBySlug(params.slug)
  return {
    props: {
      ...markdownMeta,
    },
  }
}
