import React from 'react'
import Head from 'next/head'

const test = () => {
  return (
    <div>
      <Head>
        <title>Test</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>This is a test page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at debitis
        odit non dolorum assumenda doloribus nobis! At molestiae itaque cumque
        excepturi minus? Temporibus aliquid, quos minus possimus nobis sint!
      </p>
    </div>
  )
}

export default test
