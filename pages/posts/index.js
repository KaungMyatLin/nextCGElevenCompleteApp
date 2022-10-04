import AllPosts from '../../components/post/allposts'
import { getAllPosts } from '../../lib/post-util'
// const DUMMY_POSTS = [
//   {
//       title: "Getting started with nextjs",
//       image: "getting-started-with-nextjs.png",
//       excerpt: "NextJS is the react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
//       date: "2022-02-10",
//       slug: "getting-started-with-nextjs"
//   },
//   {
//       title: "Getting started with nextjs2",
//       image: "getting-started-with-nextjs.png",
//       excerpt: "NextJS is the react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
//       date: "2022-02-10",
//       slug: "getting-started-with-nextjs2"
//   },
//   {
//       title: "Getting started with nextjs3",
//       image: "getting-started-with-nextjs.png",
//       excerpt: "NextJS is the react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
//       date: "2022-02-10",
//       slug: "getting-started-with-nextjs3"
//   },
//   {
//       title: "Getting started with nextjs4",
//       image: "getting-started-with-nextjs.png",
//       excerpt: "NextJS is the react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
//       date: "2022-02-10",
//       slug: "getting-started-with-nextjs4"
//   },
// ]

function AllPostsPage(props) {
  return (
    <AllPosts posts={props.posts}/>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostsPage