'use client';
import ThemeSwitcher from './components/ThemeSwitcher';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <Navbar />
      <Hero />
      <main className=''></main>
      <footer className=''></footer>
    </>
  );
}
