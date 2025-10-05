"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const routes = [
  { path: '/', label: 'Home' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/userprofile', label: 'Profile' },
  { path: '/contact', label: 'Contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const { isAuthenticated, username, logout } = useAuth();

  if (pathname === '/login') {
    return null;
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Shell App</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200",
                    pathname === route.path
                      ? "border-slate-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>

          {isAuthenticated && (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, <span className="font-semibold">{username}</span>
              </span>
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200",
                pathname === route.path
                  ? "bg-blue-50 border-blue-500 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}