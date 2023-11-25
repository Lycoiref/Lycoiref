'use client'
import style from './top.module.scss'

export default function TopBar() {
  const goArchive = () => {
    window.location.href = '/pages/archive'
  }
  const goDLC = () => {
    window.location.href = '/pages/dlc'
  }

  return (
    <div className="w-screen block overflow-hidden h-16">
      <div className="row place-items-center h-full mx-auto xl:w-3/5 font-bold">
        <div className="left col flex justify-start items-center font-thin">
          <i className="bi-activity text-[25px] mr-4"></i>
          Lycoiref&#39;s Blog
        </div>
        <div className="text-center col-6 flex justify-center font-thin">
          <div className={style.item}>
            <i className="bi bi-house"></i>
            <div className={style.text}>首页</div>
          </div>
          <div className={style.item} onClick={goArchive}>
            {/* 点击跳转到Markdown归档页 */}
            <i className="bi bi-book"></i>
            <div className={style.text}>归档</div>
          </div>
          <div className={style.item}>
            <i className="bi bi-chat-left-text"></i>
            <div className={style.text}>友链</div>
          </div>
          <div className={style.item}>
            <i className="bi bi-image"></i>
            <div className={style.text}>图库</div>
          </div>
          <div className={style.item}>
            <i className="bi bi-person"></i>
            <div className={style.text} onClick={goDLC}>
              SBDLC
            </div>
          </div>
        </div>
        <div className="right col flex justify-end">
          <div
            className="
          w-[40px] h-[40px] 
          cursor-pointer 
          hover:bg-slate-300 
          rounded-full 
          flex justify-center items-center
          transition-all duration-300
          "
          >
            <i className="bi bi-search text-[20px]"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
