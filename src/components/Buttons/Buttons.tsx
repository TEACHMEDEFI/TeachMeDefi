import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

type Props = {
  children: React.ReactNode,
  onClick?: Function,
  href?: string,
  target?: "_blank",
  buttonDisabled?: boolean,
}


export function PrimaryButton({ children, onClick, href, target, buttonDisabled }: Props) {
  return (
    <div
      className={`
      bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink  rounded font-bold
      text-lg text-white ${buttonDisabled ? "brightness-75":""}
     `}
    >
      {href ?
        <Link
          href={href && href}
          target={target ? target : "_self"}
          className="w-full h-full px-7 py-2 block"
        >
          {children}
        </Link>
        :
        <button
          disabled={buttonDisabled}
          onClick={() => onClick?.()}
          className="w-full h-full px-7 py-2"
        >
          {children}
        </button>
      }
    </div>
  )
}
export function SecondaryButton({ children, onClick, href, target, buttonDisabled }: Props) {
  return (
    <div className={`bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink rounded flex ${buttonDisabled ? "brightness-75":""} `}>
      {href ?
        <Link
          href={href && href}
          className="bg-white dark:bg-bgDarkBlue px-7 py-2 w-full h-full rounded font-bold text-lg block"
          target={target ? target : "_self"}
        >
          {children}
        </Link>
        :
        <button
          className="bg-white dark:bg-bgDarkBlue px-7 py-2 w-full h-full rounded font-bold text-lg "
          disabled={buttonDisabled}
          onClick={() => onClick?.()}
        >
          {children}
        </button>
      }
    </div>
  )
}

export function GeneralButton({ children, onClick, href, target, buttonDisabled }: Props) {
  return (
    <div className={` bg-slate-200 dark:bg-bgDarkGray rounded flex  ${buttonDisabled ? "brightness-75":""} `}>
      {href ?
        <Link
          href={href && href}
          className=" px-7 py-2 w-full h-full  font-bold text-lg block"
          target={target ? target : "_self"}
          >
          {children}
        </Link>
        :
        <button
        disabled={buttonDisabled}
        onClick={() => onClick?.()}
          className=" px-7 py-2 w-full h-full  font-bold text-lg "
        >
          {children}
        </button>
      }
    </div>
  )
}

