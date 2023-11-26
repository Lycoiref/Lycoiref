'use server'
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
  if (!data) {
    data = {
      title: 'No title',
      author: 'Lycoiref',
      description: 'No description',
      date: '',
      tags: [],
    }
  }
  return { data, content }
}
