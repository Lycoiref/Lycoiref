'use client'
import { useEffect, useState } from 'react'
import ArticleCard from './Card'

export interface Article {
  title: string
  author: string
  description: string
  date: Date
  tags: string[]
  slug: string
}

export default function ArchivePage() {
  const [articles, setArticles] = useState<Article[]>([])
  useEffect(() => {
    fetch('/pages/archive/api')
      .then((res) => res.json())
      .then((res) => {
        setArticles(res.articles)
      })
  }, [])

  return (
    <div>
      <h1>Archive</h1>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  )
}
