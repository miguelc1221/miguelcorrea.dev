import { forwardRef } from 'react'
import { ProjectItem } from '../components/projectItem'
import { Button } from '../components/button'
import Image from 'next/image'
import ProfileImg from '../public/images/me.jpg'
import WcGQLImg from '../public/images/wc-gql.png'
import CbCli from '../public/images/cbcli.png'
import musiqRemix from '../public/images/musiq-remix.png'
import Link from 'next/link'

export default forwardRef<HTMLDivElement>(function Home(_, ref): JSX.Element {
  return (
    <>
      <div className="-mt-[63px] pb-10 pt-[103px] w-full heroBackground">
        <div className="flex flex-col text-center items-center gap-6 md.5:heroContainer">
          <div className="text-black">
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

      <div className="container pt-24 flex flex-col gap-10" ref={ref}>
        <section>
          <h2 className="text-black dark:text-white text-4xl underline decoration-primary underline-offset-4 mb-5 ">
            Who am i?
          </h2>
          <p className="indent-4 text-slate-800 dark:text-slate-200 mb-4">
            Hi, my name is Miguel and I am a frontend developer with a passion
            for creating beautiful and functional user experiences. Despite not
            having a formal education in the field, I am proud to say that I am
            self-taught, and have put in countless hours of practice and
            dedication to get to where I am today. Currently, I am working at
            Microsoft where I have the opportunity to work on exciting projects
            and collaborate with talented individuals. Prior to my current role,
            I have worked for companies such as HelloFresh and Workday, where I
            gained invaluable experience and further honed my skills as a
            developer. I am always eager to learn and stay up-to-date with the
            latest trends in the industry to ensure that I am delivering
            high-quality work that exceeds expectations. I also have a big
            interest in design and am working on improving this skill set. Join
            me on this journey as I continue to push the boundaries of frontend
            development.
          </p>

          <div className="text-center">
            <a
              href={'/miguel_correa_resume_x3.pdf'}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button>View my resume</Button>
            </a>
          </div>
        </section>

        <section id="projects">
          <h2 className="text-black dark:text-white text-4xl underline decoration-primary underline-offset-4 mb-5">
            Projects
          </h2>
          <div className="projectGrid">
            <ProjectItem
              href="https://musiq-remix.vercel.app/"
              title="Musiq Remix"
              subTitle="An Apple Music clone built with Remix"
              src={musiqRemix}
            />
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
})
