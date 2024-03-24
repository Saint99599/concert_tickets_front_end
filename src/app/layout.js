import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

import SideBarAdmin from "@/components/SideBarAdmin"

export const metadata = {
  title: 'Create Next App',
  description: 'something like that',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex ${roboto.className}`}>
        <SideBarAdmin/>
        <main className="bg-[#FBFBFB] w-full md:ml-60 py-16 px-8">
          {children}
        </main>
      </body>
    </html>
  )
}
