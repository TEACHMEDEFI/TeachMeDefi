
import Link from 'next/link'

type Props = {}

export default function index({ }: Props) {
  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center'>
      <h2>
        This is ETh section
      </h2>
      <Link href={"/eth/what-is-ethereum"}>lesson 1</Link>
      <Link href={"/eth/how-to-ethereum"}>lesson 2</Link>
      <Link href={"/eth/how-to-use-MetaMask"}>lesson 3</Link>

      <h1 className="text-5xl font-extrabold text-gradient ">
        Hello, world!
      </h1>

    </div>
  )
}