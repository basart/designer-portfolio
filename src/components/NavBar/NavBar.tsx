import Link from 'next/link';
import Image from 'next/image';

import NavBarMenu from './NavBarMenu';

function NavBar() {
  const links = [
    { label: 'Cases', path: '/cases' },
    { label: 'About me', path: '/about-me' },
  ];

  return (
    <header className="bg-black pb-10 pt-10">
      <div className="container flex">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={89}
            height={64}
          />
        </Link>

        <NavBarMenu links={links} />
      </div>
    </header>
  );
}

export default NavBar;
