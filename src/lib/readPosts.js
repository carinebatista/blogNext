import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'src/posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (field === 'date') {
      items[field] = data[field] ? new Date(data[field]).toISOString() : null; 
    }

    if (field === 'title') {
      items[field] = data[field]
    } 

    if (field === 'resume') {
      items[field] = data[field]
    }
    
    if (field === 'image') {
      items[field] = data[field]
    }
    if (field === 'imageAlt') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => { 
      const post = getPostBySlug(slug, fields)

      const date = new Date(post.date);
      post.date = isNaN(date) ? null : date.toISOString();

      return post
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
