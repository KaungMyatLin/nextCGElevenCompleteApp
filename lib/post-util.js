import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const postsDirectory = path.join(process.cwd(), 'posts')
export function getPostFiles() {
    return fs.readdirSync(postsDirectory)
}
export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContentStr = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContentStr);
    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    return postData
}
export function getAllPosts() {
    const postMkdFiles = getPostFiles();
    const postData_Arr = postMkdFiles.map( postFile => {
        return getPostData(postFile)
    })
    const sortedPosts = postData_Arr.sort((postA, postB) => postA > postB? -1: 1)
    return sortedPosts
}
export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(p => p.isFeatured)
    return featuredPosts
}