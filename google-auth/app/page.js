import { Inter } from 'next/font/google'
import Login from './login/page';
import HomePage from './home/page';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <main className={inter.className}>
      <div>
        {user ? (
          // Render authenticated user view
          <HomePage {...pageProps} />
        ) : (
          // Render login view
          <Login />
        )}
      </div>
    </main>
  )
}
