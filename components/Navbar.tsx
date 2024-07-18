import Link from 'next/link'
import Image from 'next/image'




export const Navbar = () => {
    return (
        <nav className='bg-gray-100 text-zinc-900 p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <Image
                    src="/logo.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    quality={100}
                />
        <div className="hidden md:flex text-white">
           <Link href="/" className="mx-2 text-black"> Home</Link>

        </div>
        <div>
            <Link href="/about" className="mx-2 text-black">About</Link>
        </div>
        <div>
            <Link href="/contact" className="mx-2 text-black">Contact</Link>
         </div>
            </div>
        </nav>
    )
}