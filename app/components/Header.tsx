import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers';

const menus = [
  { name: '홈', href: '/' },
  { name: '포스트', href: '/post' }
];

export default async function Header() {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken')?.value;

  return (
    <header className='sticky top-0 bg-white shadow-lightly z-50'>
      <nav className='mx-auto flex justify-between max-w-7xl lg:2'>
        <div className='flex gap-8'>
          <div>
            <a href='/' className='flex items-center'>
              <Image height={60} width={60} src='/logo.png' alt='logo'></Image>
              <span className='text-lg font-bold sm:text-xl'>AtikPersei Blog</span>
            </a>
          </div>

          <div className='flex items-center justify-between gap-4'>
            {menus.map((item, index) => {
              return (
                <a className='font-medium' href={item.href} key={uuidv4()}>{item.name}</a>
              )
            })}
          </div>
        </div>

        <div className='flex items-center justify-between gap-4'>
          <a className='font-medium' href={token ? '/admin' : '/login'}>{token ? '관리자' : '로그인'}</a>
        </div>
      </nav>
    </header>
  )
}