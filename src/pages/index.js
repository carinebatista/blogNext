import { getAllPosts } from '@/lib/readPosts'
import style from './../styles/style.module.scss'
import Link from 'next/link'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import formatDate from '@/utils/formattedDate'
import Footer from '@/components/Footer'

 function Home({posts}) {

  return (
    <div className={style.Blog}>
     <Header/>
     <Nav/>
      <div className={style.BlogDescription}>
        <p> Hello, i&apos;m Carine, and i like to cook and drawn in CSS in my free time. </p> 
        <p>If you want to see more from me outside this space, 
          my website has some links to follow me! 
          You can also check my Github profile and follow me! 
          (Not personally haha, that would be creepy)
        </p>
        <p>Anyway, be welcome to my blog!</p>
      </div>

      <h3 className={style.BlogHeaderposts}> Here is my most recent posts </h3>

      <div className={style.BlogContent}> 
        <div className={style.BlogContentPost}>
          {posts.map((post, index) => (
            <div key={index}>
              <div className={style.BlogContentPostHeader}> 
              <Link href={`/posts/${post.slug}`} className={style.BlogContentPostHeaderTitle}>
                {post.title}
                </Link>
                <span className={style.BlogContentPostHeaderDate}>{formatDate(post.date)}</span>
              </div> 
              <div> 
                <p>{post.resume}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
  </div>
  )

}
export default Home;

export const getStaticProps = async () => {
  const posts = getAllPosts([ 'title', 'date','slug', 'image', 'imageAlt', 'resume' ])
  return {
    props: {
      posts
    }
  }
}
