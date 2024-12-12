import '@/styling/globals.css'
import '@/styling/expressive-code.css'
import { AnnouncementsProvider } from '@/context/AnnouncementsContext';

import ECInit from '@/markdown/expressive-code-init.mdx'

import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

import Navbar from '@/components/app/Navbar'
import ScrollToTop from '@/components/app/ScrollToTop'
import SetStylingPref from '@/components/app/SetStylingPref'
import { ThemeProvider } from '@/components/app/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default:
      'HCO',
    template: `%s - HCO`,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <AnnouncementsProvider>{children}</AnnouncementsProvider>
          <div id="drawer"></div>
          <div id="modal"></div>
          <Toaster />
          <SetStylingPref />
          <ScrollToTop />
          <div className="hidden">
            <ECInit />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
