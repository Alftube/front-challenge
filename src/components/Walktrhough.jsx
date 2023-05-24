import Image from 'next/image';

function Walktrhough() {
  return (
    <section className='w-full flex justify-center gap-32 mt-32 bg-single-wave-pattern'>
      <div className='cardsBG'></div>
      <div className='cardsContainer flex justify-center'>
        <div
          className='introCard bg-gradient-to-b from-blue-500 to-pink-400 relative transform rotate-3 top-30 left-0 mr-400'
          id='card1'>
          <div className='illustrationsBG'></div>
          <Image
            className='cardsIllustration'
            src='/assets/illustrations/walkthroug-1-desktop.png'
            alt='character sitting on a rocket'
            width={400}
            height={400}
          />
          <div className='bottomCard'>
            <div className='titleAndIcon'>
              <div className='iconWrapper'>
                <Image
                  src='/assets/icons/walkthrough-1.svg'
                  alt=''
                  width={40}
                  height={40}
                />
              </div>
              <h2 className='cardTitle'>1—browse</h2>
            </div>
            <p className='cardParagraph'>
              Browse our tech catalog with more than 20 top tech products
            </p>
          </div>
        </div>

        <div
          className='introCard bg-gradient-to-b from-blue-500 to-pink-400'
          id='card2'>
          <div className='illustrationsBG'></div>
          <Image
            src='/assets/illustrations/walkthroug-2-desktop.png'
            alt="two hands coming out of  two phone's screens and touching each other"
            width={400}
            height={400}
          />
          <div className='bottomCard'>
            <div className='titleAndIcon'>
              <div className='iconWrapper'>
                <Image
                  className='cardIcon'
                  src='/assets/icons/walkthrough-2.svg'
                  alt=''
                  height={40}
                  width={40}
                />
              </div>
              <h2 className='cardTitle'>2—choose</h2>
            </div>
            <p className='cardParagraph'>
              Exchange your hard earned AeroPoints for the item you want
            </p>
          </div>
        </div>

        <div
          className='introCard bg-gradient-to-b from-blue-500 to-pink-400 relative left-10 top-30 rotate-3 z-2'
          id='card3'>
          <div className='illustrationsBG'></div>
          <Image
            className='cardsIllustration'
            src='/assets/illustrations/walkthroug-3-desktop.png'
            alt='character sitting on a desk with a computer'
            width={400}
            height={400}
          />
          <div className='bottomCard'>
            <div className='titleAndIcon'>
              <div className='iconWrapper'>
                <Image
                  src='/assets/icons/walkthrough-3.svg'
                  alt=''
                  width={40}
                  height={40}
                />
              </div>
              <h2 className='cardTitle'>3—enjoy!</h2>
            </div>
            <p className='cardParagraph'>
              All done, you can relax! We’ll take care of delivery of your tech
              item!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Walktrhough;
