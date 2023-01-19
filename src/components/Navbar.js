import { Link } from 'gatsby'
import React from 'react'
import * as styles from "../components/styles.module.css"

export default function Navbar() {
	return (
		<div>
			<div className={`w3-white ${styles.mainNavigation}`}>
				<button className={`w3-btn`}>Home</button>
				<button className={`w3-btn`}>About</button>
				<button className={`w3-btn`}>Work</button>
				<button className={`w3-btn`}>Feedback</button>
				<Link className={`w3-btn`} to="../pages/404">Error Page</Link>
			</div>
		</div>
	)
}