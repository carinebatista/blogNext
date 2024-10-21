import React from 'react'
import style from './style.module.scss'


function Footer() {
  return (
	<footer className={style.footer}>
		<span className={style.letters}> &lt;/&gt; </span>  with &#10084;
		 by <span className={style.letters}> Carine Batista. </span> 
	</footer>
  )
}

export default Footer