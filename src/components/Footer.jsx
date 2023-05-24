import Image from 'next/image';

function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center p-8 absolute h-200 left-0 right-0 top-45'>
      <nav>
        <ul>
          <Image
            className=' position: absolute left-49'
            src='./assets/icons/github-default.svg'
            width={27}
            height={27}
            alt='github logo'
          />
          <li>
            <a
              className='text-neutral-400 px-9 font-semibold'
              href='https://github.com/Alftube/frontend-challenge'>
              View my repository
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
