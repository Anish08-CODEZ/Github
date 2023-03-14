/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  const router = useRouter();
  console.log(router);

  const getPathname = usePathname();
  console.log(getPathname);

  const isActive = (pathname) => {
    return getPathname === pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white';
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
                <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact')}`}>Contact</Link>
                <Link href="/test/api" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/test/api')}`}>Testing APIs</Link>
                {!user && (
                  <Link href='/auth/login'>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Login
                    </button>
                  </Link>
                )}
                {loading && (
                  <div className='h-full flex items-center justify-center'>
                    <p>Loading...</p>
                  </div>
                )}
                {user && (
                  <div className='w-full border-l-1 flex flex-row flex-1'>
                    <Link href={'/dashboard/user'} className='border-l-2 flex flex-row flex-1 items-center justify-center'>
                      <p className='text-sm ml-2 mr-2 text-white'>{user.displayName}</p>
                      <img
                        src={user.photoURL}
                        alt="avatar"
                        referrerPolicy='no-referrer'
                        className='w-10 rounded-full'
                      />
                    </Link>
                  </div>
                )}
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
