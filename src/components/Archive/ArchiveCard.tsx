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
      className="text-black no-underline block"
    >
      <div className="article-card flex h-24 bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
        <div className="img w-40 h-24 relative">
          <Image
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&q=50&fm=webp&crop=entropy&cs=srgb&width=400&fmt=webp"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="content w-full h-full flex flex-col justify-between p-4">
          <div className="header">
            <div className="title text-xl font-bold line-clamp-1">{title}</div>
            <div className="date text-gray-400 text-sm">
              {date.toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
          <div className="tags">
            {tags.map((tag) => (
              <span
                key={tag}
                className="tag mr-2 font-light relative group inline-block"
              >
                #{tag}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
