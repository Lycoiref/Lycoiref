import {
  getMarkdownFiles,
  getMarkdownFileBySlug,
} from '../../../../utils/markdownUtils'

// export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET() {
  // console.log(request);
  let files = await getMarkdownFiles()
  files = files
    .filter((file) => file.match(/\.md$/))
    .map((file) => file.replace(/\.md$/, ''))
  const articles = []
  for (const file of files) {
    const { data } = await getMarkdownFileBySlug(file)
    const article = {
      title: data.title,
      author: data.author,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      slug: file,
    }
    articles.push(article)
  }
  // return {
  //   props: {
  //     articles,
  //   },
  // }
  return Response.json({ articles })
}