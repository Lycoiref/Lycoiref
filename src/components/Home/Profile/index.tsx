import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Profile() {
  return (
    <div className="card overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <div className="card-body -mt-16 flex flex-col items-center">
        <div className="h-32 w-32 border-4 border-white rounded-full">
          <Image
            src="/Lycoiref.jpg"
            alt="John Doe"
            className="rounded-full"
            width={128}
            height={128}
          />
        </div>
        <h2 className="mt-4 text-2xl font-bold">Lycoiref</h2>
        <p className="text-sm text-gray-600">Web Developer</p>
        <p className="mt-2 text-center text-sm text-gray-600">
          热爱编程、写作和分享知识。专注于Web开发和用户体验设计。
        </p>
        <div className="mt-4 flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 text-gray-600 hover:text-gray-900" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-5 w-5 text-gray-600 hover:text-gray-900" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5 text-gray-600 hover:text-gray-900" />
          </a>
          <a href="mailto:john@example.com">
            <Mail className="h-5 w-5 text-gray-600 hover:text-gray-900" />
          </a>
        </div>
      </div>
    </div>
  )
}
