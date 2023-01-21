import { Link } from 'gatsby'
import React, { useState, createContext, useContext } from "react"
import * as styles from "../components/styles.module.css"
import Layout from "../components/Layout.js"

const UserContext = createContext();

function Navbar() {
  const [navbar, navbarState] = useContext(UserContext)
  return (
    <div className={`w3-text-white w3-border ${styles.mainNavigation}`}>
      <button className={`w3-btn`} onClick={() => navbarState('Home') }>Home</button>
      <button className={`w3-btn`} onClick={() => navbarState('About') }>About</button>
      <button className={`w3-btn`} onClick={() => navbarState('Work') }>Work</button>
      <button className={`w3-btn`} onClick={() => navbarState('Feedback') }>Feedback</button>
      <Link className={`w3-btn`} to="../pages/404">Error Page</Link>
    </div>
  )
}

export default function Home() {
  const [navbarClick, setNavbarClickState] = useState('Home')
  return (
    <>
      <UserContext.Provider value={[navbarClick, setNavbarClickState]}>
      <div className={`${styles.mainContainer}`}>
        <Navbar/>
        <Layout>
          {navbarClick}
        </Layout>
      </div>
      </UserContext.Provider>
    </>
  )
}
