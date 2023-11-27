---
title: 将 B站缓存m4s文件转换为mp4
author: AUTHOR
description:
date: 2023-11-27 18:11:05
tags:
  - Bilbili
  - ffmpeg
  - m4s
  - mp4
categories:
---

删除前9位0，然后将文件名改为数字，再用ffmpeg合并

```bash
for file in *.m4s; do mv "$file" "${file#?????????}"; done

```
