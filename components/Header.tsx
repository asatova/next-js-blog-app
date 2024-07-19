import React from 'react';
import SiteLogo from './logos/SiteLogo';
import { GlobalData } from '../lib/types';
import {Navbar} from "./Navbar";
import {NavbarSecondLayer} from "./HeaderSecondLayer";
import Image from 'next/image'

export default function Header() : JSX.Element {
  return (
    <header className="sticky top-0 z-10 mx-auto  backdrop-blur-lg dark:bg-zinc-950/75">
        <Navbar />
        <NavbarSecondLayer />

    </header>
  );
}
