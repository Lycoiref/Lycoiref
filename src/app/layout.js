import './globals.scss'
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
// add bs-icons
import 'bootstrap-icons/font/bootstrap-icons.css'
// import { Inter } from 'next/font/google'
import { Fireworks } from '@/components/Fireworks'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Lycoiref's Blog",
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        <Fireworks />
        {children}
      </body>
    </html>
  )
}
