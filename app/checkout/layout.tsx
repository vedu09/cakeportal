import { HelpCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='p-4'>
      <header className='bg-card mb-4 border-b'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <Link href='/'>
            <Image
              src='/icons/cake-logo.png'
              alt='logo'
              width={150}
              height={150}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Link>

          <div>
            <Link href='/page/help'>
              <HelpCircle className='w-6 h-6' />
            </Link>
          </div>
        </div>
      </header>
      <div>
        <h1 className='text-3xl font-bold text-center my-6'>Checkout</h1>
        <div className='border-t border-gray-300 shadow-md mx-auto w-3/4 mb-4'></div>
      </div>
      {children}
    </div>
  )
}
