import PostContent from '../../components/post/post-detail/post-content'
import { getPostData, getPostFiles } from '../../lib/post-util'
function PostDetailPage(props) {
    return (
        <PostContent post={props.post}/>
    )
}

export function getStaticProps(context) {
    const {params} = context;
    const {slug} = params;
    const postData = getPostData(slug);
    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}
export function getStaticPaths() {
    const postMkdFiles = getPostFiles();
    const slugs = postMkdFiles.map (fileN => fileN.replace(/\.md$/, ''));
    return {
        paths: slugs.map(slug => ({params: {slug: slug}})),
        fallback: false
    }
}

export default PostDetailPage