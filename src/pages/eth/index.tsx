import React from 'react'
import Link from 'next/link'

type Props = {}

export default function index({ }: Props) {
  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center'>
      <h2>
        This is ETh section
      </h2>
      <Link href={"/eth/1"}>lesson 1</Link>
      <Link href={"/eth/2"}>lesson 2</Link>
      <Link href={"/eth/3"}>lesson 3</Link>
    </div>
  )
}