export default function Page() {
  return (
    <div className="dlc-page">
      <div className="title w-full flex justify-center text-2xl font-black h-[200px] items-center">
        存の真报
      </div>
      <picture className="flex">
        <img
          src="https://blog-1301952160.cos.ap-shanghai.myqcloud.com/Lycoiref/dlc.jpg"
          alt="DLC"
          className="w-[400px]"
        />
        <img
          src="https://blog-1301952160.cos.ap-shanghai.myqcloud.com/Lycoiref/dlc/evidence1.png"
          alt="sb"
          className="flex-grow-0 flex-shrink-0 w-[400px] object-contain"
        />
      </picture>
      嘿↑嘿↓嘿←嘿→嘿，我是SBDLC
    </div>
  )
}
