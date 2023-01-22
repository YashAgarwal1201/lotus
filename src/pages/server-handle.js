import * as React from "react"
import { Link } from 'gatsby'
import * as styles from '../components/styles.module.css'
//import {useState, useEffect} from 'react'

export default function Component() {
	const formSectionStyles = `w3-panel w3-white w3-padding-16 w3-round`
	const formInputStyles = `w3-input`
	const formButtonStyles = `w3-button w3-black w3-hover-orange w3-round w3-margin material-icons`
	return (
		<div className={`w3-container w3-padding w3-orange`} style={{minWidth: 100+'vw', minHeight: 100+'vh'}}>
			<h1 className={`w3-center`}>Admin Panel</h1>
			<form className={`w3-card w3-padding`} style={{width: 100+'%', height: 100+'%'}}>
				<div className={`${formSectionStyles}`}>
					<label>Path</label><br/>
					<input className={`${formInputStyles}`} type="text" required="on"/>
				</div>
				<div className={`${formSectionStyles}`}>
					<label>File Name</label><br/>
					<input className={`${formInputStyles}`} type="text" required="on"/>
				</div>
				<div className={`${formSectionStyles}`}>
					<label>File Content</label><br/>
					<textarea className={`${formInputStyles}`} style={{height: 500+'px'}}></textarea>
				</div>
				<div className={`${formSectionStyles}`}>
					<button type="submit" className={`${formButtonStyles}`}>send</button>
					<button type="delete" className={`${formButtonStyles}`}>delete</button>
				</div>
			</form>
		</div>
	)
}
