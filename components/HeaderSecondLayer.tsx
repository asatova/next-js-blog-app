import Link from 'next/link'
import Image from 'next/image'




export const NavbarSecondLayer = () => {
    return (
        <nav className='container mx-auto flex justify-start items-center bg-gray-100 text-zinc-900 p-4 gap-16'>

            <div className="hidden md:flex text-white gap-20">
                <Link href="/projects" className="mx-2 text-black">Projects</Link>

            </div>
            <div>
                <div><Link href={{  pathname: '/strategy'}} > Strategy</Link></div>
            </div>
            <div>
                <div><Link href={{  pathname: '/events'}} > Events</Link></div>
            </div>
            <div>
                <div><Link href={{  pathname: '/documents'}} > Documents</Link></div>
            </div>
            <div>
                <div><Link href={{  pathname: '/media'}} > Media</Link></div>
            </div>
        </nav>
    )
}