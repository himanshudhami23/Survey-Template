import { UserButton } from '@clerk/nextjs';
import React, { ReactNode } from 'react'
import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';
function Layout({children}:{children:ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
        <nav className='flex justify-between item-center border-b border-border h-[60px] px-4 py-2'>
            <Logo/>
            <div className='flex gap-4 item-center'>
            <ThemeSwitcher/>
            <UserButton afterSignOutUrl="/sign-in" />
            </div>
        </nav>
        <main className="flex w-full flex-grow">{children}</main>
        </div>
  );
}

export default Layout;