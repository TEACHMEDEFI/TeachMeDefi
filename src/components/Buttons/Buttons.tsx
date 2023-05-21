import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

type Props = {
  children: React.ReactNode,
  onClick?: Function,
  href?: string,
  target?: "_blank",
}


export function PrimaryButton({ children, onClick, href, target }: Props) {
  return (
    <div className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink px-7 py-2 rounded font-bold text-lg text-white" >
      <Link
        href={href ? href : "/"}
        onClick={() => onClick?.()}
        target={target ? target : "_self"}
      >
        {children}
      </Link>
    </div>
  )
}
export function SecondaryButton({ children, onClick, href, target }: Props) {
  return (
    <div className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink p-1  rounded flex">
      <Link
        href={href ? href : "/"}
        className="bg-white dark:bg-bgDarkBlue px-7 py-1 w-full h-full rounded font-bold text-lg "
        onClick={() => onClick?.()}
        target={target ? target : "_self"}
      >
        {children}
      </Link>
    </div>
  )
}

export function GeneralButton({ children, onClick, href, target }: Props) {
  return (
    <div className=" bg-slate-200 dark:bg-bgDarkGray p-1  rounded flex">
      <Link
        href={href ? href : "/"}
        className=" px-7 py-1 w-full h-full  font-bold text-lg "
        onClick={() => onClick?.()}
        target={target ? target : "_self"}
      >
        {children}
      </Link>
    </div>
  )
}

