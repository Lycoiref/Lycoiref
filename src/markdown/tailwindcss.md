---
title: 解决 Tailwindcss 和 emmet 之间的提示冲突
description: 解决 Tailwindcss 和 emmet 之间的提示冲突
slug: /tailwindcss
date: 2023-11-25
author: Lycoiref
tags:
  - Tailwindcss
  - Emmet
  - VSCode
---

# 解决 Tailwindcss 和 emmet 之间的提示冲突

安装 tailwindcss 插件后，突然惊奇的发现 emmet 快捷指令失效了，
这令笔者非常不爽，一番排查下来原来是 file.associations 导致
emmet 不认 css 和 scss 文件了，自然也就无法触发提示，解决方法如下：

```json:settings.json
// tailwindcss
  "files.associations": {
    "*.css": "tailwindcss",
    "*.scss": "tailwindcss",
  },
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "tailwindCSS.emmetCompletions": true,
  "emmet.includeLanguages": {
    "tailwindcss": "css"
  },
```
