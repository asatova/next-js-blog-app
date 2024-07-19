import Link from 'next/link'
import Image from 'next/image'




export const NavbarSecondLayer = () => {
    return (
        <nav className='container mx-auto flex justify-start items-center bg-gray-100 text-zinc-900 p-4 gap-16'>

            <div className="hidden md:flex text-white gap-20">
                <Link href="/green-projects" className="mx-2 text-black"> GIZ Green projects</Link>

            </div>
            <div>
                <Link href="/regional" className="mx-2 text-black">Regional Climate Change Adaptation Strategy</Link>
            </div>
            <div>
                <Link href="/events" className="mx-2 text-black">Events</Link>
            </div>
            <div>
                <Link href="/documents" className="mx-2 text-black">Documents</Link>

            </div>
            <div>
                <Link href="/media" className="mx-2 text-black">Media gallery</Link>

            </div>
        </nav>
    )
}