import classes from './featuredposts_Cmp.module.css'
import PostGrid from '../post/postsgrid'
function FeaturedPostsCmp(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  )
}

export default FeaturedPostsCmp