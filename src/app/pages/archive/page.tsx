'use client'
import { useEffect, useState } from 'react'
import ArticleCard from '@/components/Archive/ArchiveCard'
import type { Article } from '@/components/Archive/ArchiveCard'

export default function ArchivePage() {
  const [archiveData, setArchiveData] = useState<
    Record<string, Record<string, Article[]>>
  >({}) // 按年、月分组的文章数据
  const [allTags, setAllTags] = useState<string[]>([]) // 所有标签

  useEffect(() => {
    fetch('/pages/archive/api')
      .then((res) => res.json())
      .then((res) => {
        const groupedArticles: Record<string, Record<string, Article[]>> = {}

        // 分组文章按年份和月份
        res.articles.forEach((article: Article) => {
          const year = new Date(article.date).getFullYear().toString()
          const month = new Date(article.date).getMonth() + 1 // 月份从 0 开始，所以加 1

          if (!groupedArticles[year]) {
            groupedArticles[year] = {}
          }

          if (!groupedArticles[year][month]) {
            groupedArticles[year][month] = []
          }

          groupedArticles[year][month].push(article)
        })

        setArchiveData(groupedArticles)
        setAllTags(res.allTags || [])
      })
  }, [])

  return (
    <main className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">文章归档</h1>
        <p className="text-muted-foreground">
          共计{' '}
          {
            Object.values(archiveData).flatMap((months) =>
              Object.values(months).flat()
            ).length
          }{' '}
          篇文章， 涵盖 {allTags.length} 个主题
        </p>
      </div>

      {Object.entries(archiveData)
        .reverse()
        .map(([year, months]) => (
          <div key={year} className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center">
              <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-2">
                {year.slice(-2)}
              </span>
              {year}年
            </h2>
            {Object.entries(months)
              .reverse()
              .map(([month, posts]) => (
                <div key={`${year}-${month}`} className="space-y-4 ml-10">
                  <h3 className="text-xl font-medium flex items-center">
                    <span className="text-primary mr-2">{month}月</span>
                    <span className="text-sm text-muted-foreground">
                      ({posts.length}篇)
                    </span>
                  </h3>
                  <div className="space-y-6">
                    {posts.map((post) => (
                      <ArticleCard key={post.slug} article={post} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ))}
    </main>
  )
}
