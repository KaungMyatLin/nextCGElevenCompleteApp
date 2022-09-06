import classes from './appearance-Cmp.module.css'
import Image from 'next/image'

function AppearanceCmp() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/max.jpg" alt="photo" width={300} height={300} />
            </div>
            <h1>Hi</h1>
            <p>I blog</p>
        </section>
    )
}

export default AppearanceCmp