import React from 'react'
import PostHeader from './post-header'
const DUMMY_POSTS = [
    {
        title: "Getting started with nextjs",
        image: "getting-started-with-nextjs.png",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs",
        content: '# This is a first post'
    },
]
function PostContent() {
    const imagePath= `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
    return (
        <article>
            <PostHeader title={DUMMY_POSTS.title} image={imagePath}/>
            
        </article>
    )
}

export default PostContent