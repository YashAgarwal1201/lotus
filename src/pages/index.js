import { Link } from 'gatsby'
import React, { useState, createContext, useContext } from "react"
import * as styles from "../components/styles.module.css"
import Layout from "../components/Layout.js"

const UserContext = createContext();

function Navbar() {
  const [navbar, navbarState] = useContext(UserContext)
  const buttonStyles = `w3-button w3-hover-black w3-padding-16 material-icons`
  return (
    <div className={`w3-text-white w3-border ${styles.mainNavigation}`}>
      <button className={`${buttonStyles}`} onClick={() => navbarState('Home') }>home</button>
      <button className={`${buttonStyles}`} onClick={() => navbarState('About') }>person</button>
      <button className={`${buttonStyles}`} onClick={() => navbarState('Work') }>work</button>
      <button className={`${buttonStyles}`} onClick={() => navbarState('Feedback') }>rate_review</button>
      <button className={`w3-circle w3-text-pink w3-white w3-margin-top ${buttonStyles}`} onClick={() => console.log('extra page btn')}>add</button>
      {/*<Link className={`${buttonStyles}`} to="../pages/404">error</Link>*/}
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
