import * as React from "react"
import * as styles from "../components/styles.module.css"
//import Navbar from '../components/Navbar.js'
import Layout from "../components/Layout.js"

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <p>This is a paragraph</p>
        </div>
        <p className="w3-center">Hello There!</p>
      </Layout>
    </>
  )
}
