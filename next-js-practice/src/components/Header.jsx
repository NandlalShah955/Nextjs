import Link from 'next/link';
import React from 'react'
import '../app/main.css'
// import { useRouter } from 'next/router'
const Header = () => {

    return (
        <header>
            <div>logo</div>
            <ul>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link href='/course'>
                        Course
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;