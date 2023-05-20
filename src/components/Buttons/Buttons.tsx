import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

type Props = {
  children: React.ReactNode,
  onClick?: Function,
  href?: string,
}


export function PrimaryButton({ children, onClick, href }: Props) {
  return (
    <div className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink px-7 py-2 rounded font-bold text-lg" >
      <Link
        href={href ? href : "/"}
        onClick={() => onClick?.()}
      >
        {children}
      </Link>
    </div>
  )
}
export function SecondaryButton({ children, onClick, href }: Props) {
  return (
    <div className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink p-1  rounded flex">
      <Link
        href={href ? href : "/"}
        className="bg-white dark:bg-bgDarkBlue px-7 py-1 w-full h-full rounded font-bold text-lg "
        onClick={() => onClick?.()}
      >
        {/* <div > */}
        {children}
        {/* </div> */}
      </Link>
    </div>
  )
}

