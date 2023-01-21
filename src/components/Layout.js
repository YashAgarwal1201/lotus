import React from 'react'
import Navbar from '../components/Navbar.js'
import Home from '../components/Home.js'
import About from '../components/About.js'
import Work from '../components/Work.js'
import Feedback from '../components/Feedback.js'
import * as styles from "../components/styles.module.css"

export default function Layout({children}) {
	return (
		<div className={`${styles.mainContainer}`}>
			<Navbar/>
			<div className={`w3-container w3-border ${styles.mainContent}`}>
				{children}
				<Home />
				<About />
				<Work />
				<Feedback />
			</div>
		</div>
	)
}