'use client'
import Link from 'next/link'
import Image from 'next/image'

export interface Article {
  title: string
  author: string
  description: string
  date: string
  tags: string[]
  slug: string
}

export default function ArticleCard({ article }: { article: Article }) {
  const { title, date: dateString, tags, slug } = article
  const date = new Date(dateString)

  return (
    <Link
      href={`/pages/article/${slug}`}
      prefetch={false}
      className="block no-underline text-slate-800"
    >
      <div className="article-card group flex h-24 overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
        <div className="img relative h-24 w-36 shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&q=50&fm=webp&crop=entropy&cs=srgb&width=400&fmt=webp"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="content flex h-full w-full flex-col justify-between p-4">
          <div className="header">
            <div className="title line-clamp-1 text-lg font-semibold text-slate-900">
              {title}
            </div>
            <div className="date text-sm text-slate-500">
              {date.toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
          <div className="tags text-sm text-slate-500">
            {tags.map((tag) => (
              <span
                key={tag}
                className="tag group relative mr-3 inline-flex items-center font-light transition-colors duration-200 hover:text-slate-700"
              >
                #{tag}
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-slate-400 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
