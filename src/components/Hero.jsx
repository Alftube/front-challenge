import Image from 'next/image';

function Landing() {
  return (
    <section className='flex flex-col items-center h-full w-full'>
      <div className='flex mt-16 h-full bg-single-wave-pattern '>
        <div className='flex flex-col items-start justify-center z-9 w-1/2'>
          <h5 className='w-500 flex mt-8 text-neutral-400 text-sm mb-0 w-1/2 font-semibold'>EXPLORE THE</h5>
          <h1 className='text-9xl font-bold bg-clip-text text-transparent bg-brand-default bg-gradient-to-r from-blue-500 to-purple-500'>
            TECH <span className='bg-clip-text text-transparent bg-neutral-900'>ZONE</span>
          </h1>
          <p className='text-neutral-400 text-sm mb-0 w-1/2 font-semibold'>
            Here you’ll be able to exchange all of your hard-earned Aeropoints
            and exchange them for cool tech.
          </p>
          <a className='btn-allProducts mt-4 text-neutral-300 bg-brand-default py-4 px-6 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-purple-500 flex' href='#productos'>
            VIEW ALL PRODUCTS
            <Image
            src="/assets/icons/Icons.svg"
            width={23}
            height={23}
            alt="icons"
             />
          </a>
        </div>
        <div className='hero-desktop flex justify-center items-center'>
          <div className='ilustrationBG bg-gradient-to-br from-brand-default via-neutral-900 rounded-full w-80 h-64 relative z-90'>
            <Image className='h-400 bg-gradient-to-b from-blue-500 to-pink-400 bg-opacity-50 rounded-3xl w-470 ml-160 mt-50 relative'
              src='/assets/illustrations/hero-desktop.png'
              alt='hero-desktop'
              height={400}
              width={470}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
