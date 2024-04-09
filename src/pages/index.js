import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getAllPosts } from '@/lib/readPosts'

const inter = Inter({ subsets: ['latin'] })

 function Home({posts}) {

 

  return (
    <><h1>Hello </h1>
    {posts.map((post, index) => (
        <div key={index}>
        <p>Title: {post.title}</p>
        <p>Date: {formatDate(post.date)}</p>
        <Image src = {post.image} alt={post.imageAlt} width={300} height={250}/>
        <p>{post.content}</p>
      </div>
      ))}
    </>
    )

    function formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
    
      const formattedDate = `${day}/${month}/${year}`;
    
      return formattedDate;
    }
    
}


export default Home;


export const getStaticProps = async () => {
  const posts = getAllPosts([ 'title', 'date', 'image', 'imageAlt', 'content' ])
  return {
    props: {
      posts
    }
  }
}
