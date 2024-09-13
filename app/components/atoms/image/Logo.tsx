import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * 로고 이미지
 * @desc 로고 이미지 컴포넌트
 * @extends {Component<Props>}
 */
const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center'>
      <Image height={40} width={40} src='/logo.svg' alt='logo' />
      <span className='ml-2 text-lg font-bold sm:text-xl'>AtikPersei Blog</span>
    </Link>
  );
};

export default Logo;
