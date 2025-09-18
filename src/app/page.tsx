import Blog from '@/components/sections/blog'

import FAQ from '@/components/sections/faq'
import Features from '@/components/sections/features'
import { Hero2 } from '@/components/sections/hero2'
import HowItWorks from '@/components/sections/how-it-works'
import Logos from '@/components/sections/logos'
import Pricing from '@/components/sections/pricing'
import Problem from '@/components/sections/problem'
import Solution from '@/components/sections/solution'
import Testimonials from '@/components/sections/testimonials'
import TestimonialsCarousel from '@/components/sections/testimonials-carousel'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <section className={cn('flex flex-col items-center justify-center grow overflow-x-hidden')}>
      {/* <Hero /> */}
      <Hero2 />
      <Logos />
      <Problem />
      <Solution />
      <HowItWorks />
      <TestimonialsCarousel />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Blog />
    </section>
  )
}
