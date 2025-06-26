'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Essays', path: '/essays' },
    { name: 'Trips', path: '/trips' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-primary-medium shadow-sm border-b border-primary-medium/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="text-2xl font-bold text-white">
            Katie M
          </Link>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.path
                    ? 'text-white bg-accent-bright/60'
                    : 'text-white/90 hover:text-white hover:bg-accent-light/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;