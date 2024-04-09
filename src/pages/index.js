import Image from 'next/image'
import { getAllPosts } from '@/lib/readPosts'
import style from './../styles/style.module.scss'

 function Home({posts}) {

  return (
 
    <div className={style.Blog}>
    <div className={style.BlogTitle}>
      <h2 className={style.BlogTitleName}>Carine's blog</h2>
      <h3 className={style.BlogTitleSubtitle}> A blog of cool tech stuff </h3>
    </div>
    <div className={style.BlogDescription}>
      <p> I am Carine, and I like to play chess and software! </p> 
      <p>If you want to see more from me outside this space, 
        my website has some links to follow me! 
        You can also check my Github profile and follow me! 
        (Not personally haha, that would be creepy)
      </p>
      <p>Anyway, be welcome to my blog, also know as digital garden.</p>
    </div>

  {/* Recent Posts */}
    <h3 className={style.BlogHeaderposts}> Here is my most recent posts </h3>

    <div className={style.BlogContent}> 
      <div className={style.BlogContentPost}>
        {posts.map((post, index) => (
          <div key={index}>
            <div className={style.BlogContentPostHeader}> 
              <a href="#" className={style.BlogContentPostHeaderTitle}>{post.title}</a> 
              <span className={style.BlogContentPostHeaderDate}>{formatDate(post.date)}</span>
            </div> 
            <div> 
              <p>{post.resume}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )


    function formatDate(dateString) {
      const date = new Date(dateString);
      
      const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short', 
        day: '2-digit',
        year: 'numeric' 
      });
    
      return formattedDate;
    }
}
export default Home;

export const getStaticProps = async () => {
  const posts = getAllPosts([ 'title', 'date', 'image', 'imageAlt', 'resume' ])
  return {
    props: {
      posts
    }
  }
}
