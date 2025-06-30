import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rock RMS - Group Detail',
  description:
    'Rock RMS Group Detail page redesign showcasing modern component architecture and design system patterns',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
