import classes from './postsgrid.module.css'
import PostItem from './postItem'
import { uuid } from 'uuidv4'

function PostsGrid(props) {
    const { posts } = props;
    return (
        <ul className={classes.grid}>
            {posts.map( itm => (
                <PostItem post={itm} key={uuid()}/>
            ))}
        </ul>
    )
}

export default PostsGrid