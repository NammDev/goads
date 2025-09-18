import * as React from 'react'

import Link from 'next/link'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Skeleton } from '../ui/skeleton'

export function GithubLink() {
  return (
    <Button asChild size='sm' variant='ghost' className='shadow-none'>
      <Link href={''} target='_blank' rel='noreferrer'>
        <Icons.Github />
        <React.Suspense fallback={<Skeleton className='h-4' />}>
          <StarsCount />
        </React.Suspense>
      </Link>
    </Button>
  )
}

export async function StarsCount() {
  return <span className='text-muted-foreground text-xs tabular-nums'>91</span>
}
