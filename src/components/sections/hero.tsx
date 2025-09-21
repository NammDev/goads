import { cn } from '@/lib/utils'
import { ScrollIndicator } from '../design/scroll-indicator'
import { GridPattern } from '../magicui/grid-pattern'
import { Spotlight } from '../ui/spotlight'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { Icons } from '../guarahooks/icons'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Suspense } from 'react'

export async function Hero() {
  return (
    <div
      id='hooks-hero'
      className={cn(
        'relative w-full h-[calc(100dvh-64px)]',
        'flex flex-col items-center justify-center grow gap-8',
        'border-b '
      )}
    >
      <hgroup
        className={cn(
          'text-center',
          'z-10',
          'flex flex-col items-center justify-center gap-4',
          'px-3 lg:px-0'
        )}
      >
        <h1 className={cn('text-3xl md:text-5xl lg:text-6xl font-bold', 'max-w-[28ch]')}>
          Premium Facebook Assets for Agencies & E-commerce
        </h1>
        <p className={cn('text-sm lg:text-base max-w-[64ch]')}>
          <span className={cn('font-bold')}>GoAds</span> has been a trusted provider of Facebook
          Business Managers, Profiles, Pages, and Ad Accounts for years. We deliver reliable,
          high-quality assets that help agencies and e-commerce brands run ads with confidence.
        </p>
      </hgroup>
      <div
        className={cn(
          'z-10 flex flex-col lg:flex-row lg:items-center justify-center gap-4 w-3/4',
          'px-4 lg:px-0'
        )}
      >
        <Link
          href='/docs'
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'group hover:scale-[1.025]'
          )}
        >
          Get Started
          <Icons.Chevron.Right className='size-4 group-hover:translate-x-1 duration-200 transition-transform' />
        </Link>

        <Link
          className={cn(
            buttonVariants({ variant: 'secondary', size: 'lg' }),
            'group hover:scale-[1.025] gap-2'
          )}
          //   href={siteConfig.links.github}
          href={'https://ui.shadcn.com/docs/components/tooltip'}
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>Affilliate 15%</span>
          <Icons.Star className='size-4 group-hover:scale-[1.25] duration-200 transition-transform' />
        </Link>
      </div>
      <ScrollIndicator className={cn('absolute left-8 lg:left-1/2 lg:-translate-x-1/2 bottom-8')} />

      <Spotlight className='-top-20 left-0 md:-top-40 md:left-80' fill='white' />
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={'4 2'}
        className={cn('[mask-image:radial-gradient(640px_circle_at_center,white,transparent)]')}
      />
    </div>
  )
}
