import Profile from '@/components/Home/Profile'
import Weather from '@/components/Home/Weather/Weather'

export default function Home() {
  return (
    <main className="w-screen flex justify-center bg-slate-300">
      <div className="w-full flex gap-4 h-[1600px] justify-center pt-10">
        <div className="w-[45vw] bg-white rounded-md">
          最近文章、置顶文章、推荐文章、一些好康的
        </div>
        <div className="w-[350px] flex flex-col gap-4">
          <div className="w-full bg-white rounded-md">
            <Profile />
          </div>
          <div className="w-full bg-white flex-grow rounded-md">
            文章信息、站点信息、Tags、友链、留言板、日历、天气、音乐
            <Weather />
          </div>
        </div>
      </div>
    </main>
  )
}
