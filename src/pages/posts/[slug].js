import { getAllPosts, getPostBySlug } from '@/lib/readPosts'
import style from './../../styles/style.module.scss'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Post({ post }) {
  return (
	<div className={style.Blog}>
    <Header/>
    <Nav/>
			<div className={style.Post}>
          <h3 className={style.PostTitle}>{post.title}</h3>
          <p className={style.PostDate}>{new Date(post.date).toLocaleDateString()}</p>
        <div className={style.PostContent}>{post.content}</div>
			</div>
      <Footer/>

	</div>

  )
}

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug, ['title', 'date', 'content'])
  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false, 
  }
}