import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

type Props = {
  children: React.ReactNode,
  onClick?: Function,
  href?: string,
  target?: "_blank",
  customClassWrapper?: string,
  customClassButton?: string,
  buttonDisabled?: boolean,
}


export function PrimaryButton({ children, onClick, href, target, customClassWrapper, customClassButton, buttonDisabled }: Props) {
  return (
    <div
      className={`
      bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink  rounded font-bold
      text-lg text-white ${buttonDisabled ? "brightness-50" : ""}
      ${customClassWrapper ? customClassWrapper : ""} 
     `}
    >
      {href ?
        <Link
          href={href && href}
          target={target ? target : "_self"}
          className={`w-full h-full px-7 py-2 block ${customClassButton ? customClassButton : ""} `}
        >
          {children}
        </Link>
        :
        <button
          disabled={buttonDisabled}
          onClick={() => onClick?.()}
          className={`w-full h-full px-7 py-2 ${customClassButton ? customClassButton : ""} `}
        >
          {children}
        </button>
      }
    </div>
  )
}
export function SecondaryButton({ children, onClick, href, target, customClassWrapper, customClassButton, buttonDisabled }: Props) {
  return (
    <div className={`
    bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink p-1 rounded flex 
    ${buttonDisabled ? "brightness-50" : ""} 
    ${customClassWrapper ? customClassWrapper : ""} 
    `}>
      {href ?
        <Link
          href={href && href}
          className={`bg-white dark:bg-bgDarkBlue px-7 py-2 w-full h-full rounded font-bold text-lg block
          ${customClassButton ? customClassButton : ""} 
          `}
          target={target ? target : "_self"}
        >
          {children}
        </Link>
        :
        <button
          className={`bg-white dark:bg-bgDarkBlue px-7 py-2 w-full h-full rounded font-bold text-lg 
          ${customClassButton ? customClassButton : ""} 
          `}
          disabled={buttonDisabled}
          onClick={() => onClick?.()}
        >
          {children}
        </button>
      }
    </div>
  )
}

export function GeneralButton({ children, onClick, href, target, customClassWrapper, customClassButton, buttonDisabled }: Props) {
  return (
    <div className={`
      rounded flex  
    ${buttonDisabled ? "brightness-50" : ""} 
    ${customClassWrapper ? customClassWrapper : ""} 
    `}>
      {href ?
        <Link
          href={href && href}
          className={` px-7 py-2 w-full h-full  font-bold text-lg block rounded
          bg-slate-200 dark:bg-bgDarkGray
          ${customClassButton ? customClassButton : ""} 
          `}
          target={target ? target : "_self"}
        >
          {children}
        </Link>
        :
        <button
          disabled={buttonDisabled}
          onClick={() => onClick?.()}
          className={` px-7 py-2 w-full h-full  font-bold text-lg rounded
          bg-slate-200 dark:bg-bgDarkGray
          ${customClassButton ? customClassButton : ""} 
          `}
        >
          {children}
        </button>
      }
    </div>
  )
}

export function ClaimRewardButton({ children, onClick, href, target, customClassWrapper, customClassButton, buttonDisabled }: Props) {
  return (
    <div className={`
      rounded flex  
    ${buttonDisabled ? "brightness-50" : ""} 
    ${customClassWrapper ? customClassWrapper : ""} 
    `}>
      {href ?
        <Link
          href={href && href}
          className={` px-3 py-1 w-full font-bold rounded-lg
          bg-slate-200 dark:bg-bgDarkGray
          ${customClassButton ? customClassButton : ""} 
          `}
          target={target ? target : "_self"}
        >
          {children}
        </Link>
        :
        <button
          disabled={buttonDisabled}
          onClick={() => onClick?.()}
          className={` px-3 py-1  w-full font-bold  rounded-lg
          bg-slate-200 dark:bg-bgDarkGray
          ${customClassButton ? customClassButton : ""} 
          `}
        >
          {children}
        </button>
      }
    </div>
  )
}

