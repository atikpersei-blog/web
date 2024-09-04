'use client';

import { FormEvent } from 'react';

export default function Login() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const action = form.getAttribute('action') || '';
    form.action = action;
    form.submit();
  };

  const setAction = (event: React.MouseEvent<HTMLButtonElement>, actionUrl: string) => {
    const form = event.currentTarget.form;
    if (form) {
      form.setAttribute('action', actionUrl);
    }
  };

  return (
    <nav className='mt-4 max-w-7xl flex items-center justify-center mx-auto'>
      <form className='flex flex-col items-center gap-4' onSubmit={handleSubmit} method='post'>
        <span className='text-xl font-bold'>Login</span>

        <input className='border rounded-md p-2 focus:outline-none' placeholder='Username' name='username' />
        <input className='border rounded-md p-2 focus:outline-none' type='password' placeholder='Password' name='password' />

        <button
          className='px-2 py-1 bg-black rounded-lg text-white'
          type='submit'
          onClick={(event) => setAction(event, '/api/auth')}
        >
          Login
        </button>
      </form>
    </nav>
  )
}