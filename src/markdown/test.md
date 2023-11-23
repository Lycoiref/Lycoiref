---
title: The first article
description: This is the first article.
date: 2020-10-01
---
[[toc]]


# Title

This is an article post.
## Subheading
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

::: tip
React-Markdown的代码高亮插件在Next13中无法正常解析，需要自己在'use client'中引入Prism组件，并重新封装才能正常使用。
:::

```jsx
'use client'
import { Prism } from 'react-syntax-highlighter'
import tomorrow from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow'

export default function SyntaxHighlighterSever({ children, className }) {
  console.log(children, className)
  const match = /language-(\w+)/.exec(className || '')
  console.log(match)
  return !children ? null : (
    <Prism language={match[1]} style={tomorrow}>
      {String(children).replace(/\n$/, '')}
    </Prism>
  )
}
```

## 测试对齐

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
