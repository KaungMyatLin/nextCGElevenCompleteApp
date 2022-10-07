import PostHeader from './post-header'
import classes from './post-content.module.css'
import Image from 'next/image'
import ReactMarkDown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import chosenLang1 from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import chosenLang2 from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

SyntaxHighlighter.registerLanguage('js', chosenLang1)
SyntaxHighlighter.registerLanguage('css', chosenLang2)
function PostContent(props) {
    const {post} = props;
    const imagePath= `/images/post/${post.slug}/${post.image}`
    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;
            if (node.children[0].tagName === 'img') {
                const nodeContainingImg = node.children[0];
                return (
                    <div className={classes.image}>
                        <Image
                            src={`/${nodeContainingImg.properties.src}`}
                            alt={nodeContainingImg.properties.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                )
            }
            return <p>{paragraph.children}</p>;
        },

        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}
                >{children}</SyntaxHighlighter>
            );
        }
    }
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath}/>
            <ReactMarkDown components={customRenderers} >{post.content}</ReactMarkDown>
        </article>
    )
}

export default PostContent