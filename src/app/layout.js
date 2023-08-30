import './globals.css'
import { Inter } from 'next/font/google'



export const metadata = {
  title: 'PEC Plan Estrategico Comercial',
  description: 'PEC Plan Estrategico Comercial',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className='scroll-smooth'
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
