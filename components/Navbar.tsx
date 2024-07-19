import Link from 'next/link'
import Image from 'next/image'
import About from "../app/about";



export const Navbar = () => {
    return (
        <nav className='container mx-auto flex justify-center items-center bg-gray-100 text-zinc-900 p-4'>
            <div className='container mx-auto flex justify-start items-end'>
                <Image
                    src="/logo.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    quality={100}
                />
            </div>
        <div className="hidden md:flex text-white">
           <Link href="/" className="mx-2 text-black"> Home</Link>

        </div>
        <div>
            <Link
                href={{
                    pathname: '/about'

                }}
            >
                About us
            </Link>
        </div>
        <div>
            <Link href="/contact" className="mx-2 text-black">Contact</Link>
         </div>
                <div>
                    <Link href="/news" className="mx-2 text-black">News</Link>

            </div>
        </nav>
    )
}