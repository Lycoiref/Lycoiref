'use client'
import { Prism } from 'react-syntax-highlighter'
import vs from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark'

export default function SyntaxHighlighterSever({ children, className }) {
  const match = /language-(\w+)/.exec(className || '')
  return !children ? null : (
    <Prism language={match[0] ? match[1] : ''} style={vs}>
      {String(children).replace(/\n$/, '')}
    </Prism>
  )
}
