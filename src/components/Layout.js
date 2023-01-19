import React from 'react'
import Navbar from '../components/Navbar.js'

export default function Layout({children}) {
	return (
		<div>
			<Navbar/>
			<div>
				{children}
			</div>
		</div>
	)
}