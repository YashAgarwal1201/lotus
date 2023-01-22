import * as React from "react"

const SSRPage = ({serverData}) => (
  <main>
    <h1>SSR Page with Dogs {serverData}</h1>
  </main>
)

export default SSRPage

export async function getServerData() {
  return {
    props: 'stringola',
  }
}