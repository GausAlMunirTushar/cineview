import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>CineView</title>
        <meta name="description" content="Cineview imdb clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-2xl text-cyan-600'>CineView</h1>
      </main>
    </>
  )
}
