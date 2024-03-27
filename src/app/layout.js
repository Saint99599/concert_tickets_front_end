import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

import SideBar from "@/components/SideBar"

export const metadata = {
  title: 'Create Next App',
  description: 'something like that',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex ${roboto.className}`}>
        {children}
      </body>
    </html>
  )
}
