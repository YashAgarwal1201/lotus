import React from 'react'
import Navbar from '../components/Navbar.js'
import * as styles from "../components/styles.module.css"

export default function Layout({children}) {
	return (
		<div className={`${styles.mainContainer}`}>
			<Navbar/>
			<div>
				{children}
			</div>
		</div>
	)
}