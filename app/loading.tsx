import Image from 'next/image'

export default async function LoadingPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white'>
      <Image
        src='/animations/loading.gif'
        alt='Loading cake'
        width={150}
        height={150}
      />
      <p className='mt-4 text-xl font-semibold text-pink-600 bg-pink-100 border border-pink-300 rounded-xl px-4 py-2 shadow-sm'>
        Please Wait While We Are Loading...
      </p>
    </div>
  )
}
