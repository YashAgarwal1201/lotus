import React from 'react'
import { Link } from 'gatsby'
//import Navbar from '../components/Navbar.js'
import Home from '../components/Home.js'
import About from '../components/About.js'
import Work from '../components/Work.js'
import Feedback from '../components/Feedback.js'
import * as styles from "../components/styles.module.css"

/*function Navbar() {
	return (
		<div className={`w3-text-white w3-border ${styles.mainNavigation}`}>
			<button className={`w3-btn`}>Home</button>
			<button className={`w3-btn`}>About</button>
			<button className={`w3-btn`}>Work</button>
			<button className={`w3-btn`}>Feedback</button>
			<Link className={`w3-btn`} to="../pages/404">Error Page</Link>
		</div>
	)
}*/

export default function Layout({children}) {
	return (
		<div className={`w3-container w3-border ${styles.mainContent}`}>
			{(children == 'Home') ? <Home/> : ((children == 'About') ? <About/> : <Work/>)}
		</div>
	)
}