import Image from 'next/image'

type RecentPostProps = {
  title: string
  date: string
  category: string
  description: string
  imageUrl: string
}

export default function RecentPost({
  title,
  date,
  category,
  description,
  imageUrl,
}: RecentPostProps) {
  return (
    <div className="group rounded-lg border overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={`Recent post`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {category}
          </span>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <h3 className="font-bold line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  )
}
