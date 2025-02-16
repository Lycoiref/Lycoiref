import FeaturedPost from '@/components/Home/FeaturedPost'
import FunProject from '@/components/Home/FunProject'
import Profile from '@/components/Home/Profile'
import RecentPost from '@/components/Home/RecentPost'
import Weather from '@/components/Home/Weather/Weather'

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
              <FeaturedPost
                title="使用 Next.js 和 Tailwind CSS 构建现代博客"
                date="2024-02-14"
                description="探索如何使用最新的 Web 技术栈构建一个现代化的个人博客系统..."
                imageUrl="/placeholder.svg?height=200&width=300"
                badgeText="置顶"
                badgeColor="bg-purple-50"
              />
              <FeaturedPost
                title="Web 开发中的设计模式实践"
                date="2024-02-13"
                description="深入探讨在前端开发中常用的设计模式..."
                imageUrl="/placeholder.svg?height=200&width=300"
                badgeText="推荐"
                badgeColor="bg-blue-50"
              />
            </div>

            {/* Recent Posts Grid */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">最新文章</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <RecentPost
                    key={i}
                    title={`构建可扩展的微服务架构：实践与经验分享 #${i}`}
                    date={`2024-02-${14 - i}`}
                    category="技术"
                    description="探讨在构建微服务架构时的最佳实践，包括服务拆分、通信模式、数据一致性等关键问题的解决方案..."
                    imageUrl="/placeholder.svg?height=200&width=300"
                  />
                ))}
              </div>
            </div>

            {/* Fun Projects */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">好玩的项目</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <FunProject
                  title="WebGL 3D 游戏引擎"
                  description="使用 Three.js 构建的轻量级 3D 游戏引擎"
                  imageUrl="/placeholder.svg?height=400&width=600"
                />

                <FunProject
                  title="AI 图像生成器"
                  description="基于 Stable Diffusion 的 AI 图像生成工具"
                  imageUrl="/placeholder.svg?height=400&width=600"
                />
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
