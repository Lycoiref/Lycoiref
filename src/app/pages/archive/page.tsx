/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ArticleCard from './Card'
import { getMarkdownFiles, getMarkdownFileBySlug } from '@/utils/markdownUtils'

export interface Article {
  title: string
  author: string
  description: string
  date: Date
  tags: string[]
  slug: string
}

export default async function ArchivePage() {
  let files = await getMarkdownFiles()
  files = files
    .filter((file) => file.match(/\.md$/))
    .map((file) => file.replace(/\.md$/, ''))
  const articles: Array<Article> = []
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

  return (
    <div>
      <h1>Archive</h1>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  )
}
