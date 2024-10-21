import React from 'react'
import style from './style.module.scss'


function Header() {
  return (
	<header className={style.header}>
		<h2 className={style.title}>Carine&apos;s blog</h2>
		<h3 className={style.subtitle}> A blog of cool tech stuff </h3>
	</header>
  )
}

export default Header