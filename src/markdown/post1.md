---
title: 在Nextjs中解析Markdown
description: 记录了在高版本Nextjs中解析Markdown时遇到的一些坑以及解决方案
date: 2023-11-23
author: Lycoiref
---

[[toc]]

# 在 Nextjs 中解析 Markdown

Next 并没有原生支持 Markdown，需要自己引入第三方库来解析，
且在 Next 高版本中，大部分的 Markdown 解析库都存在大大小小的坑，
本篇对笔者在 Next13（后升级为 14）中对 Markdown 进行解析时遇到的一些坑以及解决方案进行总结。

本文内容：

1. Markdown-it 的引入和使用
2. Markdown-it 的代码高亮以及样式提升
3. 高版本 Next 中的动态路由以及 SSG 预渲染支持

## 0. 插件选择

::: tip
在笔者写下这篇文章时，如果你使用的 Next.js 版本 >= 13，那么笔者不推荐使用`React-Markdown`，
建议使用 `Markdown-it` 进行替代，原因将在后文中阐明，这里只是希望看到的读者能够少走弯路。
:::

- [React-Markdown](https://github.com/remarkjs/react-markdown) 是一个基于 React 的 Markdown 解析库，相较于 Markdown-it，它更加轻量化，有着丰富的插件生态。

- [Markdown-it](https://github.com/markdown-it/markdown-it) 是一个基于 JavaScript 的 Markdown 解析库，开箱即用，且支持插件扩展，原生就具备一定的 md 解析功能，更易于使用。

由于 Next 使用 React 生态，因此在查询推荐的 Markdown 解析库时，笔者最初
选择了 React-Markdown。殊不知，就是这个选择让笔者踩了一晚上坑，最终不得已
放弃了 React-Markdown，转而使用 Markdown-it 才解决了这些问题。

下面正式介绍如何在 Next 中使用 Markdown-it 进行 Markdown 解析。

## 1. Markdown-it 的引入和使用

### 1.0 项目背景

之所以需要在 Next 中使用 Markdown，是因为笔者在开发自己的博客，显然，博客的
内容少不了对 md 文档的解析，因此，笔者不仅需要优雅的对`Markdown`进行解析，还需要
使用动态路由来将路由解析到对应的`Markdown`文档，奈何新版 Next 的路由与文件结构
同样有不小的变动，且网络上资料较少，本文作为记录的同时也希望能够帮助有相同需要的
读者少走弯路。

### 1.1 安装

```bash
yarn add markdown-it
```

### 1.2 基础功能导入和使用

::: tip
本文之后的 Nextjs 版本均为 13/14，mdit 指的是 markdown-it
:::

在 Next13/14 中，我们可以在需要解析 MD 文档的`/app/pages/route/page.jsx`中引入
`markdown-it`，在官方文档中，`mdit`的引入方式为 require，但是在 Nextjs 中，显然
我们更倾向于使用`import`，因此我们可以使用以下方式引入`mdit`：

```jsx:app/pages/route/page.jsx
import MarkdownIt from 'markdown-it' // 导入markdown-it

export default function Page() {
  // 使用options创建markdown-it实例，可以在官网查看options的配置
  const md = new MarkdownIt(options)
  const result = md.render('# markdown-it rulezz!') // 渲染markdown文档

  // 最后将渲染好的文档返回给页面即可
  return <div dangerouslySetInnerHTML={{ __html: result }}></div>
}
```

### 1.3 代码高亮

完成上述步骤后`mdit`就已经为我们完成了基础的 md 解析功能，但是显然笔者并不满足于基础的功能，我们还
需要对代码进行高亮，这里我们选择'highlight.js'作为代码高亮的插件（这也是`mdit`官方文档中进行代码
高亮时使用的插件），我们可以使用以下方式引入`highlight.js`：

```bash
yarn add highlight.js
```

项目中引入

```jsx
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js' // 导入highlight.js
// 除了导入highlight.js，我们还需要导入highlight.js的样式表，这里我们选择github样式
// 事实上highlight.js的样式表有很多种，可以在官网查看，此处不再赘述
import 'highlight.js/styles/github.css'

export default function Page() {
  let md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value
        } catch (__) {
          console.log(__)
        }
      }

      return '' // use external default escaping
    },
    html: false, // 其他options
    xhtmlOut: true,
    typographer: true,
  })
  const result = md.render('# markdown-it rulezz!')

  return <div dangerouslySetInnerHTML={{ __html: result }}></div>
}
```

### 1.4 其他优化

完成上面的操作后，我们的`md`解析页面已经初具雏形，但是显然我们还需要对`md`的样式进行优化，
笔者这里进行的优化主要是：

1. 添加了`github-markdown-css`的样式表
2. 添加了 Anchor 插件，用于生成锚点以及跳转
3. 添加了 Toc 插件，用于生成目录

```bash
yarn add github-markdown-css markdown-it-anchor markdown-it-toc-done-right string
```

插件的选择上读者可以根据自己的需求进行选择，这里笔者只是提供了一种可能的选择。

::: tip
使用 toc 插件需要在`.md`文件中插入[[toc]]，否则不会生成目录，这也是笔者在使用时花了
一段时间才发现的问题。
:::

```tsx
// 完整md解析代码
import 'github-markdown-css'
import Container from 'markdown-it-container'
import Anchor from 'markdown-it-anchor'
import Toc from 'markdown-it-toc-done-right'
import string from 'string'

function legacySlugify(s) {
  return string(s).slugify().toString()
}

export default function Page() {
  let md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value
        } catch (__) {
          console.log(__)
        }
      }

      return '' // use external default escaping
    },
    html: false, // 其他options
    xhtmlOut: true,
    typographer: true,
  })
  let md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value
        } catch (__) {
          console.log(__)
        }
      }

      return '' // use external default escaping
    },
    html: false,
    xhtmlOut: true,
    typographer: true,
  })
    .use(Anchor, {
      permalink: Anchor.permalink.linkInsideHeader({
        placement: 'before',
        style: 'visually-hidden',
      }),
    })
    .use(Toc, {
      slugify: legacySlugify,
      containerClass: 'toc',
      level: [2, 3],
    })
    .use(Container, 'tip', {
      render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) {
          return '<div class="tip">'
        } else {
          return '</div>\n'
        }
      },
    })
  const result = md.render('# markdown-it rulezz!')

  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: result }}
    ></div>
  )
}
```

之后可以建立一个额外的 css 文件，用于对`markdown-body`进行样式优化，
进行自定义样式或者使用他人提供的样式表。

如果你只需要完成对 Markdown 的解析以及渲染，那么到这里就已经完成了，
但是如果你需要使用 Next 的动态路由以及 SSG 预渲染，那么你还需要继续阅读下面的内容。

## 2. 动态路由以及 SSG 预渲染

在`Next13`之后，Next 的文件结构以及动态路由的相关使用函数发生了较大的变化，
主要是将`pages`文件夹移动到了`app`下，导致原本的`getStaticPaths`以及`getStaticProps`
无法正常使用（报错：无法在 app 下使用 getStaticPaths）。且该问题很少有人提出，也缺少
解决方案，笔者在解决该问题时也是花费了不少时间，最终在官方文档中找到了解决方案。

### 2.1 动态路由

在 Next13 之后，动态路由生成`SSG`的函数由`getStaticPaths`变为了`generateStaticParams`

> 原文：
> In the app directory, getStaticPaths is replaced with generateStaticParams.
>
> generateStaticParams behaves similarly to getStaticPaths, but has a simplified API for returning route parameters and
> can be used inside layouts. The return shape of generateStaticParams is an array of segments instead of an array of
> nested param objects or a string of resolved paths.

因此，我们需要将原本的`getStaticPaths`替换为`generateStaticParams`，笔者的 markdown 文档统一存放在
`app/markdown`文件夹下，我们在`app/pages/article/[...slug]/page.jsx`中进行动态路由的生成：

首先在`markdownUtils.js`中编写获取`markdown`文件的函数：

::: warning
出于某种原因，`md`文档不能使用中文名，否则会导致错误，笔者还没有找到解决方案。
:::

```js:lib/markdownUtils.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Markdown files are stored in `src/markdown`.
const markdownDirectory = path.join(process.cwd(), 'src/markdown')

export async function getMarkdownFiles() {
  return fs.readdirSync(markdownDirectory)
}

export async function getMarkdownFileBySlug(slug) {
  // use client-side fetch to get markdown file
  let markdownFile = fs.readFileSync(
    path.join(markdownDirectory, `${slug}.md`),
    'utf8'
  )
  let { data, content } = matter(markdownFile)
  return { data, content }
}
```

之后在`app/pages/article/[...slug]/page.jsx`中进行动态路由的生成（遍历`markdown`文件夹）：

```jsx
export async function generateStaticParams() {
  let MDs = await getMarkdownFiles()
  let slugs = []
  // 去除非md文件
  MDs = MDs.filter((slug) => slug.endsWith('.md'))
  MDs.map((md) => {
    slugs.push({
      slug: md.replace(/\.md$/, ''),
    })
  })
  console.log('slugs')
  console.log(slugs)
  return slugs
}

// 在函数中使用slug
export default function Page({ slug }) {
  ...
}
```

### 2.2 总结

理论上完成了上述步骤后，进行`yarn build`即可完成 SSG 的预渲染页面生成
写完后再看其实操作并不复杂，但是在笔者的实际操作中，由于 Next 的更新后
各版本文档散乱，缺乏汉化以及相关的实例，导致笔者在解决该问题时花费了
不少时间，写下这篇博客也希望能帮助到有需要的读者。
