import type React from 'react'
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
  alt,
  ...props
}: ProjectItemType): React.JSX.Element => {
  return (
    <div className="flex gap-4 flex-col text-center text-slate-800 dark:text-slate-200 relative">
      <div>
        <Image
          className="rounded-lg w-full h-auto"
          width={1600}
          height={1000}
          alt={alt}
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
