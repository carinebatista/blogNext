import React from 'react'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Link from 'next/link'
import { getAllPosts } from '@/lib/readPosts'
import formattedDate from './../utils/formattedDate'
import style from './../styles/style.module.scss';
import Footer from '@/components/Footer'

function blog({posts}) {
  return (
	<div className={style.Blog}>
    <Header/>
    <Nav/>

	<div className={style.BlogContent}> 
      <div className={style.BlogContentPost}>
        {posts.map((post, index) => (
          <div key={index}>
            <div className={style.BlogContentPostHeader}> 
            <Link href={`/posts/${post.slug}`} className={style.BlogContentPostHeaderTitle}>
               {post.title} 
              </Link>
              <span className={style.BlogContentPostHeaderDate}>{formattedDate(post.date)}</span>
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

export default blog

export const getStaticProps = async () => {
	const posts = getAllPosts([ 'title', 'date','slug', 'image', 'imageAlt', 'resume' ])
	return {
	  props: {
		posts
	  }
	}
  }
  