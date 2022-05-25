import Image from 'next/image'
import type { ImageProps } from 'next/image'

type ProjectItemType = {
  href: string
  title: string
  subTitle: string
} & ImageProps

export const ProjectItem = ({
  href,
  title,
  subTitle,
  ...props
}: ProjectItemType): JSX.Element => {
  return (
    <div className="flex gap-4 flex-col text-center text-slate-200 relative">
      <div>
        <Image
          layout="responsive"
          className="rounded-lg"
          width={16}
          height={10}
          alt=""
          {...props}
        />
      </div>
      <div>
        <a
          href={href}
          className="font-bold linkOverlay"
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
        <p>{subTitle}</p>
      </div>
    </div>
  )
}
