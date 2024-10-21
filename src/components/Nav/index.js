import React from 'react'
import style from './style.module.scss'
import Link from 'next/link'; 
import { useRouter } from 'next/router'; 


function Nav() {
	const router = useRouter();
	const isBlogActive = router.pathname === '/blog' || router.pathname.startsWith('/posts')

	return (
	<nav className={style.nav} >
		 <Link href="/" className={`${style.navLink} ${router.pathname === '/' ? style.active : ''}`} passHref> home</Link>
		<Link  className={`${style.navLink} ${isBlogActive  ? style.active : ''}`} href="/blog"> blog </Link>
		<a  className={style.navLink} href="https://github.com/carinebatista"> github </a>
		<a  className={style.navLink} href="https://x.com/carinebatata"> twitter </a>
		<a   className={style.navLink} href="https://www.linkedin.com/in/carinebatista/"> linkedin </a>
	</nav>
  )
}

export default Nav