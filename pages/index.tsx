import Head from 'next/head'

export default function Home(): JSX.Element {
  return (
    <div className="bg-neutral-700 h-screen min-h-screen flex justify-center items-center flex-col font-thin text-white">
      <Head>
        <title>Miguel Correa</title>
        <meta name="description" content="Miguel Correa's site" />
      </Head>

      <h1 className="text-6xl leading-tight">
        M<span className="text-red-500">i</span>guel Correa
      </h1>
      <p>Frontend Developer</p>
      <p className="text-3xl mt-4">Coming soon...</p>
    </div>
  )
}
