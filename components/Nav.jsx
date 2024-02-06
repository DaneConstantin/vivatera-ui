'use client'
import Link from 'next/link';
import nav from "../styles/nav.module.css";
import { useRouter } from 'next/router';
import Container from './Container';
import Image from 'next/image';

const Logo = () => {
    return (
        <div>
            <Link href="/">
                <Image
                    className="h-[48px]"
                    src="/vivaterra-logo.png"
                    width={160}
                    height={48}
                    alt="VivaTerra Logo"
                />
            </Link>
        </div>
    )
}


function NavbarItem({ href, children }) {
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
        <li>
            <Link href={href}>
                <span className={`${nav.navItem} ${isActive ? nav.activeNavItem : ''}`}>
                    {children}
                </span>
            </Link>
        </li>
    );
}


const ContactButton = () => {
    return (
        <div className="hidden w-full md:flex md:items-center md:w-auto whitespace-nowrap">
            <Link href="/">
                <span className={nav.contact}>Contact Us</span>
            </Link>
        </div>
    )
}

export default function Nav() {

    return (
        <Container className="px-8 lg:px-0">
            <div className="w-full">
                <nav
                    className={nav.navigation}>
                    <Logo />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="menu-button"
                        className="h-6 w-6 cursor-pointer md:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>

                    <div
                        className="hidden w-full md:flex md:items-center md:w-auto"
                        id="menu"
                    >
                        <ul className="md:flex md:justify-between align-center whitespace-nowrap">
                            <NavbarItem href="/">Home</NavbarItem>
                            <NavbarItem href="/about">About Us</NavbarItem>
                            <NavbarItem href="/properties">Properties</NavbarItem>
                            <NavbarItem href="/services">Services</NavbarItem>
                        </ul>
                    </div>


                    <ContactButton />

                </nav>
            </div>
        </Container>
    );
};
