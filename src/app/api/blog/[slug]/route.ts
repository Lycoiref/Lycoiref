import { getMarkdownFileBySlug, getMarkdownFiles } from '@/utils/markdownUtils';

// export const dynamic = 'force-dynamic' // defaults to force-static

export async function generateStaticParams() {
  let MDs = await getMarkdownFiles()
  const slugs = []
  // 去除非md文件
  MDs = MDs.filter((slug) => slug.endsWith('.md'))
  MDs.map((md) => {
    slugs.push({
      slug: md.replace(/\.md$/, ''),
    })
  })
  return slugs
}

export async function GET(request: Request, { params }) {
  console.log(params);

  const markdownMeta = await getMarkdownFileBySlug(params.slug)
  return Response.json({ markdownMeta })
}