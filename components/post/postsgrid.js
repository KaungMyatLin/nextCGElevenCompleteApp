import classes from './postsgrid.module.css'
import PostItem from './postItem'

function PostsGrid(props) {
    const { posts } = props;
    return (
        <ul className={classes.grid}>
            {posts.map( itm =>   {
                <PostItem key={itm.slug} post={itm.post}/>
            })}
        </ul>
    )
}

export default PostsGrid