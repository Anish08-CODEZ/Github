/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white';
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
          </div>
          <div className="flex-1 flex items-right justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href='/'>
                <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
              </Link>
            </div>
            <div className="hidden absolute right-0 sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')}`}>About</Link>
                <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/conatct')}`}>Contact</Link>
                <Link href='/signup'>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
