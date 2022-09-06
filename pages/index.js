import React, { Fragment } from 'react'
import Appearance from '../components/homePage/appearance_Cmp'
import FeaturedPosts from '../components/homePage/featuredposts_Cmp'
const DUMMY_POSTS = [
    {
        title: "Getting started with nextjs",
        image: "getting-started-with-nextjs.png",
        excerpt: "NextJS is the react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs"
    },
    {
        title: "Getting started with nextjs2",
        image: "getting-started-with-nextjs.png",
        excerpt: "NextJS is the react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs2"
    },
    {
        title: "Getting started with nextjs3",
        image: "getting-started-with-nextjs.png",
        excerpt: "NextJS is the react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs3"
    },
    {
        title: "Getting started with nextjs4",
        image: "getting-started-with-nextjs.png",
        excerpt: "NextJS is the react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs4"
    },
]

function HomePage() {
    return (
        <Fragment>
            <Appearance />
            <FeaturedPosts posts={DUMMY_POSTS}/>
        </Fragment>
    )
}

export default HomePage