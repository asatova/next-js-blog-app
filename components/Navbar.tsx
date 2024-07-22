import Link from 'next/link'
import Image from 'next/image'




export const Navbar = () => {
    return (
        <nav className='container mx-auto flex justify-center items-center bg-gray-100 text-zinc-900 p-4'>
            <div className='container mx-auto flex justify-start items-end'>
              <a href="/"> <Image
                    src="/logo.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    quality={100}
                />
              </a>
            </div>
        <div className="hidden md:flex text-white w-28">
           <Link href="/" className="text-black "> Home</Link>
        </div>
            <div className='w-28'><Link href={{  pathname: '/about'}} > About us</Link></div>
            <div className='w-28'><Link href={{  pathname: '/contact'}} > Contact</Link></div>
            <div className='w-28'><Link href={{  pathname: '/news'}} > News</Link></div>

        </nav>
    )
}