import Image from 'next/image';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
// Added a new font POPPINS from Google Font
const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  style: ['normal']
});

export default function Home() {
  return (
    <main className={inter.className}>
      <div className='p-6 w-full min-w-full flex items-center justify-center flex-col'>
        <h2>Exploring NextJS 13! 🚀</h2>

        {/* We explored Image optimisation in these lines */}
        <Image 
          src = "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          width = {500}
          height = {500}
          className='mt-10 rounded-lg drop-shadow-md transition-all hover:drop-shadow-xl hover:scale-110'
        />

        {/* We are exploring FONT OPTIMISATION in these lines */}
        <div className="mt-5">
          <h2 className={poppins.className}>A new font: POPPINS</h2>
          {/* <h2 className={sourceSans.className}>A new font</h2>
          <h2 className={shantellSans.className}>A new font</h2> */}
        </div>
      </div>
    </main>
  )
}
