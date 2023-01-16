import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
	return (
		<div>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/feedback">Feedback</Link>
			</div>
		</div>
	)
}