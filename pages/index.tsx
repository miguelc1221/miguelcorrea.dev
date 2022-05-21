import { useRef, useEffect } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useApp } from '../contexts/AppContext'
import Head from 'next/head'
import Image from 'next/image'
import ProfileImg from '../assets/me.jpg'
import WcGQLImg from '../assets/wc-gql.png'

export default function Home(): JSX.Element {
  const { dispatch } = useApp()
  const scrollPosition = useScrollPosition()
  const sectionWrapperRef = useRef<HTMLDivElement>(null)
  const firstSectionOffsetTop = sectionWrapperRef.current?.offsetTop
  const shouldChange =
    firstSectionOffsetTop && scrollPosition >= firstSectionOffsetTop - 50

  useEffect(() => {
    if (shouldChange) {
      console.log('hooo')
      dispatch({ type: 'SET_SHOULD_CHANGE_COLOR' })
    } else {
      console.log('heyyy')
      dispatch({ type: 'RESET_COLOR' })
    }
  }, [shouldChange, dispatch])

  return (
    <>
      <Head>
        <title>Miguel Correa</title>
        <meta name="description" content="Miguel Correa's site" />
      </Head>
      <div className="-mt-[63px] pb-10 pt-[103px] w-full bg-white">
        <div className="flex flex-col text-center items-center gap-6 md.5:heroContainer">
          <div className=" text-black ">
            <p>Hi There,</p>
            <h1 className="text-7xl md.5:text-9xl">
              I am <span className="text-primary">Miguel</span>
            </h1>
            <p>I am Front-end developer...I think</p>
            <button className="mt-5 px-4 py-2 text-sm bg-pinkFlash text-white shadow-sm hover:bg-pinkFlash-2">
              See my work
            </button>
          </div>
          <div className="profileImgSm md.5:profileImg">
            <Image src={ProfileImg} alt="Picture of the author" />
          </div>
        </div>
      </div>

      <div
        className="container pt-24 flex flex-col gap-10"
        ref={sectionWrapperRef}
      >
        <section>
          <h2 className="text-4xl underline decoration-primary underline-offset-4 mb-5">
            Who am i?
          </h2>
          <p>
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
        </section>

        <section>
          <h2 className="text-4xl underline decoration-primary underline-offset-4 mb-5">
            Projects
          </h2>
          <div className="gridy">
            <Image
              src={WcGQLImg}
              alt="Picture of the author"
              placeholder="blur"
              layout="responsive"
              className="rounded-lg "
            />
            <Image
              src={WcGQLImg}
              alt="Picture of the author"
              placeholder="blur"
              layout="responsive"
              className="rounded-lg "
            />
          </div>
          <p>
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
        </section>
      </div>
    </>
  )
}
