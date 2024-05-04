'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import styles from './NavBar.module.css';

type NavBarLink = {
  label: string;
  path: string;
};

interface NavBarMenuProps {
  links: NavBarLink[];
}

function NavBarMenu({ links }: NavBarMenuProps) {
  const pathname = usePathname();

  return (
    <nav className="mb-auto ml-auto mt-auto">
      <ul role="list" className="flex list-none gap-8">
        {links.map(({ label, path }) => {
          const isActive = pathname === path;
          return (
            <li
              key={path}
              className={clsx(
                'text-lg',
                styles['nav-list__item'],
                isActive && styles['nav-list__item--active']
              )}
            >
              <Link href={path}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBarMenu;
