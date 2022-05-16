import Head from 'next/head'
import Image from 'next/image'
import me from '../assets/me.jpg'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Miguel Correa</title>
        <meta name="description" content="Miguel Correa's site" />
      </Head>
      <div className="flex w-full items-center justify-between">
        <div className="mt-10 mb-10 leading-loose">
          <p>Hi There,</p>
          <h1 className="text-7xl">I am Miguel Correa</h1>
          <p>I am Front-end developer...I think</p>
          <button className="mt-5 px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm">
            Work
          </button>
        </div>
        <div className="h-[200px] w-[200px] rounded-full border-4 border-white border-solid relative">
          <Image
            className="rounded-full"
            src={me}
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-4xl underline decoration-inchworm underline-offset-4">
            Who Am I?
          </h2>
          <p className="mt-5">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-4xl underline decoration-inchworm underline-offset-4">
            Projects
          </h2>
          <p className="mt-5">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </div>
    </>
  )
}

// 646C79