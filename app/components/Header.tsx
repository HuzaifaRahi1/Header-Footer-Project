import Link from "next/link"

export default function Header() {
    return (
        <nav className="bg-black w-full h-12 mb-10">
            <header >
                <div className="bg-yellow-400 w-96  mx-auto h-12">
                    <ul className="flex text-black justify-center gap-12 py-3 ">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">Contact</Link></li>
                        <li><Link href="/">Links</Link></li>
                    </ul>
                </div>
            </header>
        </nav>
    )
}
