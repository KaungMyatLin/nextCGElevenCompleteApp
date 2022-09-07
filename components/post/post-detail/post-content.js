import PostHeader from './post-header'
import classes from './post-content.module.css'
import ReactMarkDown from 'react-markdown'
const DUMMY_POSTS = {
        title: "Getting started with nextjs",
        image: "getting-started-with-nextjs.png",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs",
        content: '# This is a first post'
    }
function PostContent() {
    const imagePath= `/images/post/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POSTS.title} image={imagePath}/>
            <ReactMarkDown> {DUMMY_POSTS.content} </ReactMarkDown>
        </article>
    )
}

export default PostContent