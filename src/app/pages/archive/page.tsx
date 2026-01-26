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
    <main className="w-screen flex justify-center py-10">
      <div className="w-full max-w-5xl space-y-8 px-6">
        <div className="space-y-3 rounded-md bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            文章归档
          </h1>
          <p className="text-sm text-slate-600">
            共计{' '}
            {
              Object.values(archiveData).flatMap((months) =>
                Object.values(months).flat()
              ).length
            }{' '}
            篇文章，涵盖 {allTags.length} 个主题
          </p>
        </div>

        {Object.entries(archiveData)
          .reverse()
          .map(([year, months]) => (
            <section key={year} className="space-y-6">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-slate-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {year.slice(-2)}
                </span>
                {year}年
              </h2>
              {Object.entries(months)
                .reverse()
                .map(([month, posts]) => (
                  <div
                    key={`${year}-${month}`}
                    className="space-y-4 border-l border-slate-200 pl-8"
                  >
                    <div className="flex items-baseline gap-2 text-slate-700">
                      <h3 className="text-lg font-medium">{month}月</h3>
                      <span className="text-sm text-slate-500">
                        ({posts.length}篇)
                      </span>
                    </div>
                    <div className="space-y-6">
                      {posts.map((post) => (
                        <ArticleCard key={post.slug} article={post} />
                      ))}
                    </div>
                  </div>
                ))}
            </section>
          ))}
      </div>
    </main>
  )
}
