import * as React from "react"
import * as style from "../components/styles.module.css"
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
