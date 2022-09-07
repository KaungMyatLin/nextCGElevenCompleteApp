import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const postsDirectory = path.join(process.cwd(), 'posts')
export function getPostData(fileName) {
    const filePath = path.join(postsDirectory, fileName);
    const fileContentStr = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContentStr);
    const postSlug = fileName.replace(/\.md$/, '');
    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    return postData
}
export function getAllPosts() {
    const postMkdFiles = fs.readdirSync(postsDirectory)
    const postData_Arr = postMkdFiles.map( postFile => {
        return getPostData(postFile)
    })
    const sortedPosts = postData_Arr.sort((postA, postB) => postA > postB? -1: 1)
    return sortedPosts
}
export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(p => postsDirectory.isFeatured)
    return featuredPosts
}