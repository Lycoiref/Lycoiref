import Image from 'next/image'

type FeaturedPostProps = {
  title: string
  date: string
  description: string
  imageUrl: string
  badgeText: string
  badgeColor: string
}

export default function FeaturedPost({
  title,
  date,
  description,
  imageUrl,
  badgeText,
  badgeColor,
}: FeaturedPostProps) {
  return (
    <article className="group relative rounded-lg border p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="relative h-24 w-32 overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt="Featured post"
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <span
            className={`inline-flex items-center rounded-md ${badgeColor} px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10`}
          >
            {badgeText}
          </span>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {description}
      </p>
    </article>
  )
}
