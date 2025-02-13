import Profile from '@/components/Home/Profile'
import Weather from '@/components/Home/Weather/Weather'
import Image from 'next/image'

export default function Home() {
  return (
    // bg-slate-300
    <main className="w-screen flex justify-center">
      <div className="w-full flex gap-4 h-[1600px] justify-center pt-10">
        <div className="w-[45vw] bg-white rounded-md p-2">
          {/* 最近文章、置顶文章、推荐文章、一些好康的 */}
          <main className="space-y-8">
            {/* Search and Filter */}
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <input
                  type="search"
                  placeholder="搜索文章..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="all">全部文章</option>
                <option value="recent">最近文章</option>
                <option value="pinned">置顶文章</option>
                <option value="recommended">推荐文章</option>
                <option value="fun">好玩的</option>
              </select>
            </div>

            {/* Featured Posts */}
            <div className="grid gap-6 md:grid-cols-2">
              <article className="group relative rounded-lg border p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative h-24 w-32 overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Featured post"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                      置顶
                    </span>
                    <h3 className="font-bold">
                      使用 Next.js 和 Tailwind CSS 构建现代博客
                    </h3>
                    <p className="text-sm text-muted-foreground">2024-02-14</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  探索如何使用最新的 Web
                  技术栈构建一个现代化的个人博客系统，包括性能优化、SEO
                  和响应式设计等关键特性...
                </p>
              </article>

              <article className="group relative rounded-lg border p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative h-24 w-32 overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Featured post"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      推荐
                    </span>
                    <h3 className="font-bold">Web 开发中的设计模式实践</h3>
                    <p className="text-sm text-muted-foreground">2024-02-13</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  深入探讨在前端开发中常用的设计模式，以及如何在实际项目中应用这些模式来提高代码质量和可维护性...
                </p>
              </article>
            </div>

            {/* Recent Posts Grid */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">最新文章</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <article
                    key={i}
                    className="group rounded-lg border overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt={`Recent post ${i}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                          技术
                        </span>
                        <span className="text-sm text-muted-foreground">
                          2024-02-{14 - i}
                        </span>
                      </div>
                      <h3 className="font-bold line-clamp-2">
                        构建可扩展的微服务架构：实践与经验分享 #{i}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        探讨在构建微服务架构时的最佳实践，包括服务拆分、通信模式、数据一致性等关键问题的解决方案...
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Fun Projects */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">好玩的项目</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <article className="group relative overflow-hidden rounded-lg border">
                  <div className="relative h-[200px]">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Fun project"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white">
                        WebGL 3D 游戏引擎
                      </h3>
                      <p className="text-sm text-gray-200">
                        使用 Three.js 构建的轻量级 3D 游戏引擎
                      </p>
                    </div>
                  </div>
                </article>

                <article className="group relative overflow-hidden rounded-lg border">
                  <div className="relative h-[200px]">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Fun project"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white">
                        AI 图像生成器
                      </h3>
                      <p className="text-sm text-gray-200">
                        基于 Stable Diffusion 的 AI 图像生成工具
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </main>
        </div>
        <div className="w-[350px] flex flex-col gap-4">
          <div className="w-full bg-white rounded-md">
            <Profile />
          </div>
          <div className="w-full bg-white flex-grow rounded-md">
            {/* 文章信息、站点信息、Tags、友链、留言板、日历、天气、音乐 */}
            <Weather />
          </div>
        </div>
      </div>
    </main>
  )
}
