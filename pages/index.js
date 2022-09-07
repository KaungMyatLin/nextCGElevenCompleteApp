import { Fragment } from 'react'
import Appearance from '../components/homePage/appearance_Cmp'
import FeaturedPosts from '../components/homePage/featuredposts_Cmp'
import { getFeaturedPosts } from '../lib/post-util'

function HomePage(props) {
    return (
        <Fragment>
            <Appearance />
            <FeaturedPosts posts={props.posts}/>
        </Fragment>
    )
}
export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts
        },
    }
}

export default HomePage