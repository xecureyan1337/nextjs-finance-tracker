import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                {/* <Image src="/wired.svg" alt="logo" height={28} width={28} /> */}
                <p className="font-semibold text-black text-2xl ml-2.5 text-shadow-black">
                    Alfiyan Tracker
                </p>
            </div>
        </Link>
    )
}