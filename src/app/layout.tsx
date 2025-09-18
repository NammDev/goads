import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { cn, constructMetadata } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Header } from '@/components/sections/header'
import CTA from '@/components/sections/cta'
import Footer from '@/components/sections/footer'

export const metadata: Metadata = constructMetadata({})

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'relative size-full min-h-dvh font-sans antialiased scroll-smooth flex flex-col'
          // inter.variable,
          // geistMono.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <TooltipProvider delayDuration={200}>
            {/* <Banner /> */}
            <Header />
            <main className={cn('grow flex flex-col', 'size-full')}>{children}</main>
            <CTA />
            <Footer />
            {/* <Footer /> */}
            {/* <Toaster richColors position='bottom-center' duration={3000} />
            <SpeedInsights /> */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
