import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { dark } from '@clerk/themes';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import { Mainside } from '@/components/mainside';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark
    }}
    >
      <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
      <Providers>
        <Navbar/>

        {/* <Mainside /> */}
        <div className="">
        {children}
      
        </div>
      </Providers>
      </body>
    </html>
    </ClerkProvider>
  )
}
