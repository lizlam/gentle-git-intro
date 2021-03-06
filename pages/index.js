import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>a gentle intro</title>
      </Head>
      <div>a gentle introduction to git</div>
      <progress value=".2" max="1.0"></progress>
    </>
  )
}

export default Home
