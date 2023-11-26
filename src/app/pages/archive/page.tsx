'use client'
import React, { useEffect, useState } from 'react'
import ArticleCard from './Card'
import {
  getMarkdownFiles,
  getMarkdownFileBySlug,
} from '../../../utils/markdownUtils'

export interface Article {
  title: string
  author: string
  description: string
  date: Date
  tags: string[]
  slug: string
}

const ArchivePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fetchData = async () => {
      let files = await getMarkdownFiles()
      files = files
        .filter((file) => file.match(/\.md$/))
        .map((file) => file.replace(/\.md$/, ''))

      const articlesData: Article[] = []
      for (const file of files) {
        const { data } = await getMarkdownFileBySlug(file)
        const article: Article = {
          title: data.title,
          author: data.author,
          description: data.description,
          date: data.date,
          tags: data.tags || [],
          slug: file,
        }
        articlesData.push(article)
      }
      setArticles(articlesData)
    }

    fetchData()
  }, []) // Empty dependency array ensures that the effect runs only once

  return (
    <div>
      <h1>Archive</h1>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  )
}

export default ArchivePage
