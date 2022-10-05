import { Fragment } from 'react'
import Appearance from '../components/homePage/appearance_Cmp'
import FeaturedPosts from '../components/homePage/featuredposts_Cmp'
import { getFeaturedPosts } from '../lib/post-util'
import Head from 'next/head'

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Max blog</title>
            </Head>
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