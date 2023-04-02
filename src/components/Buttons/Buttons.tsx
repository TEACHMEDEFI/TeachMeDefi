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
    <div>
      <Link href={href ? href : "/"}
        className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink px-7 py-2 rounded font-bold text-lg"
        onClick={() => onClick?.()}
      >
        {children}
      </Link>
    </div>
  )
}