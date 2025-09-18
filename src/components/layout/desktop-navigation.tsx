import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import Menu from '@/components/menu'

import { cn } from '@/lib/utils'
import { GithubLink } from './github-link'
import { HeaderLogo } from './header-logo'
import { ThemeToggle } from './theme-toggle'

export function DesktopNavigation() {
  return (
    <section
      className={cn(
        'relative hidden lg:flex',
        'max-w-screen-2xl w-full h-16',
        'mx-auto px-3 2xl:px-0',
        'items-center justify-between'
      )}
    >
      <div className={cn('flex items-center gap-4')}>
        <HeaderLogo />
        {/* Navigation Links */}
        <Menu />
      </div>
      <div className={cn('flex items-center gap-4')}>
        <hr className='h-6 border-l' />
        <GithubLink />
        <hr className='h-6 border-l' />
        <ThemeToggle />
      </div>
    </section>
  )
}
