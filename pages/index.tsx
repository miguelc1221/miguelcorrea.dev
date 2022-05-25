import { useRef, useEffect } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useApp } from '../contexts/AppContext'
import { ProjectItem } from '../components/projectItem'
import { Button } from '../components/button'
import Head from 'next/head'
import Image from 'next/image'
import ProfileImg from '../public/images/me.jpg'
import WcGQLImg from '../public/images/wc-gql.png'
import CbCli from '../public/images/cbcli.png'
import Link from 'next/link'

export default function Home(): JSX.Element {
  const { dispatch } = useApp()
  const scrollPosition = useScrollPosition()
  const sectionWrapperRef = useRef<HTMLDivElement>(null)
  const firstSectionOffsetTop = sectionWrapperRef.current?.offsetTop
  const shouldChange =
    firstSectionOffsetTop && scrollPosition >= firstSectionOffsetTop - 50

  useEffect(() => {
    if (shouldChange) {
      dispatch({ type: 'SET_SHOULD_CHANGE_COLOR' })
    } else {
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
            <p>Hi there,</p>
            <h1 className="text-7xl md.5:text-9xl">
              I am <span className="text-primary">Miguel</span>
            </h1>
            <p className="mb-5">Front-end developer and aspiring designer</p>
            <Link href="#projects" passHref>
              <Button>See my work</Button>
            </Link>
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
          <h2 className="text-4xl underline decoration-primary underline-offset-4 mb-5 ">
            Who am i?
          </h2>
          <p className="indent-4 text-slate-200">
            Hi, my name is Miguel Correa and I am a front-end developer
            currently working remotely from somewhere in the United States. In
            2015 I decided to learn how to code after graduating with a degree
            that I had no plans on using (B.A. Physical Education...😂). That
            year I fell in love with coding and taught myself enough to help me
            land my first job at a startup in the California Bay Area. I have
            since worked for companies such as{' '}
            <a
              href="https://www.hellofresh.com/"
              className="text-white font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              HelloFresh
            </a>
            (America&apos;s #1 meal kit) and{' '}
            <a
              href="https://www.workday.com/"
              className="text-white font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              Workday
            </a>{' '}
            (one of the leading provider of enterprise cloud applications for
            finance, HR, and planning).
          </p>

          <p className="indent-4 text-slate-200 mb-4">
            On my spare time I am an avid collector of sixth scale comic
            figures, casual gamer and basketball fanatic. I also enjoy tinkering
            on side projects for the purpose of trying out new frameworks as
            well as improving my skills. Currently I have a big interest in
            design and am working on improving this skill set.
          </p>
          <div className="text-center">
            <a
              href={'/miguel_correa_resume.pdf'}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button>View my resume</Button>
            </a>
          </div>
        </section>

        <section id="projects">
          <h2 className="text-4xl underline decoration-primary underline-offset-4 mb-5">
            Projects
          </h2>
          <div className="projectGrid">
            <ProjectItem
              href="https://warcraft-gql.com/"
              title="Warcraft-GQL"
              subTitle="GraphQL API for World of Warcraft"
              src={WcGQLImg}
            />
            <ProjectItem
              href="https://github.com/miguelc1221/comicbook-cli"
              title="ComicBook CLI"
              subTitle="A CLI tool to display the latest comic book releases."
              src={CbCli}
            />
          </div>
        </section>
      </div>
    </>
  )
}

{
  /* <Link href="#projects" passHref>
<button className="relative px-6 py-3 font-bold text-black group max-w-fit">
  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
  <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
  <span className="relative">See my work</span>
</button>
</Link> */
}