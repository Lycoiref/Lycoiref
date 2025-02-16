import Image from 'next/image'

type FunProjectProps = {
  title: string
  description: string
  imageUrl: string
}

export default function FunProject({
  title,
  description,
  imageUrl,
}: FunProjectProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border">
      <div className="relative h-[200px]">
        <Image
          src={imageUrl}
          alt="Fun project"
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </article>
  )
}
