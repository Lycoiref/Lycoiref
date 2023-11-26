'use client'
import Link from 'next/link'
import { Article } from './page'

export default function ArticleCard({ article }: { article: Article }) {
  const { title, date, tags, slug } = article
  // console.log(article)

  return (
    <Link href={`/pages/article/${slug}`} className="text-black no-underline">
      <div className="article-card flex h-24">
        <div className="img w-40 h-24 rounded overflow-hidden">
          <picture className="w-full h-full object-cover">
            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&q=50&fm=webp&crop=entropy&cs=srgb&width=400&fmt=webp"
              alt=""
            />
          </picture>
        </div>
        <div className="content w-full h-full flex flex-col justify-between">
          <div className="header">
            <div className="title text-3xl font-bold">{title}</div>
            <div className="date text-gray-400 text-sm">
              {date.toLocaleString()}
            </div>
          </div>
          <div className="tags mx-2">
            {tags.map((tag) => (
              <span key={tag} className="tag mx-1 font-light relative group">
                #{tag}
                <span className="absolute inset-x-0 bottom-[-5px] h-0.5 bg-blue-500 group-hover:h-1 transition-all duration-300"></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
