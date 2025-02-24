import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const NavItems = ({ isMenuOpen, setIsMenuOpen, pathname }) => {
  const items = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'Podcasts', href: '/podcasts' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <>
      {/* Menu per Desktop */}
      <ul className='hidden lg:flex gap-x-10'>
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`text-grey-50 text-lg px-6 py-3.5  
              ${
                pathname === item.href
                  ? 'text-white bg-dark-8 rounded outline outline-2 outline-dark-20'
                  : 'hover:text-white hover:bg-dark-8 hover:rounded hover:outline hover:outline-2 hover:outline-dark-20'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu per Mobile */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-dark-10 z-50 flex flex-col items-center justify-center w-full h-screen space-y-6 transition-transform duration-300'>
          {/* Pulsante Chiudi */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className='absolute top-5 right-5 text-white text-3xl'
          >
            <XMarkIcon className='w-8 h-8' />
          </button>

          {/* Link Mobile */}
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-white text-2xl px-6 py-3 transition-all duration-300 ease-in-out 
              ${
                pathname === item.href
                  ? 'bg-dark-8 rounded outline-2 outline-dark-20'
                  : 'hover:bg-dark-8 hover:rounded hover:outline-2 hover:outline-dark-20'
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Pulsante Contact Us nel menu mobile */}
          <Link href='/contact-us'>
            <button className='bg-yellow text-dark-8 text-lg rounded px-5 py-3.5'>
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='dark:bg-dark-10'>
      <nav className='container mx-auto p-6 flex justify-between items-center'>
        {/* Logo */}
        <div>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={180}
            height={50}
            priority
          />
        </div>

        {/* Navigazione */}
        <NavItems
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          pathname={pathname}
        />

        {/* Pulsante Contact Us su Desktop */}
        <div className='hidden lg:block'>
          <Link href='/contact-us'>
            <button className='bg-yellow text-dark-8 text-lg rounded px-5 py-3.5'>
              Contact Us
            </button>
          </Link>
        </div>

        {/* Menu Hamburger per Mobile */}
        <div className='lg:hidden'>
          <button
            onClick={() => setIsMenuOpen(true)}
            className='text-white text-2xl'
          >
            <Bars3BottomRightIcon className='w-8 h-8' />
          </button>
        </div>
      </nav>
    </header>
  );
}
