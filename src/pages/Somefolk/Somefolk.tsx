import getImageUrl from '../../utils/getImageUrl';
import { PropsWithChildren, useRef, useState } from 'react';
import VolumetricText from '../../components/VolumetricText';
import ScreenWrapper from '../../components/ScreenWrapper';
import OverlayLayer from '../../components/OverlayLayer';
import useRequestAnimationFrame from '../../hooks/animation/useRequestAnimationFrame';
import useScrollAnimation from '../../hooks/animation/useScrollAnimation';
import { IntersectionOptions } from '../../utils/ScrollAnimation';
import { AnimationOptions } from '../../utils/Animation';
import Tile from '../../components/Tile';
import Text from '../../components/Text';
import Lottie from './Lottie';

const tileImage = getImageUrl('background', 'jpg');

// ref: https://www.somefolk.co.uk/
export default function Somefolk() {
  const [isModelsLoaded, setIsModelsLoaded] = useState(false);
  // useSmoothScroll();

  return (
    <div className='text-olive-100 bg-olive-900 font-arges'>
      <ScreenWrapper className='overflow-hidden'>
        {isModelsLoaded && (
          <>
            {/* <Tile image={tileImage} /> */}
            <OverlayLayer />
          </>
        )}
        <ScreenWrapper position='absolute'>
          <VolumetricText setIsModelsLoaded={setIsModelsLoaded} word='SOMEFOLK' />
        </ScreenWrapper>
      </ScreenWrapper>
      <Layout />
      <AnimatedTextRow containerClassName='justify-center pt-3 flex-col'>
        <h3 className='text-5xl font-black'>
          TELLING MEANINGFUL STORIES THAT NEED TO BE TOLD (BY HUMANS, NOT AI)
        </h3>
        <div className='flex gap-2 tracking-wide items-center'>
          <Text variant='low-bold'>WORKING</Text>
          <Text variant='low'>WITH</Text>
          <Text variant='low-bold'>PASSIONATE PEOPLE</Text>
          <Text variant='low'>&</Text>
          <Text variant='low-bold'>DISRUPTORS</Text>
          <Text variant='low'>TO CREATE</Text>
        </div>
        <div className='flex gap-2 tracking-wide items-center'>
          <Text variant='low'>MEMORABLE</Text>
          <Text variant='low-bold'>BRANDS</Text>
          <Text variant='low'>& CAPTIVATING</Text>
          <Text variant='low-bold'>DIGITAL EXPERIENCES</Text>
          <Text variant='low'>THAT DELIVER</Text>
          <Text variant='low-bold'>RESULTS</Text>
        </div>
      </AnimatedTextRow>
      <div className='flex items-center justify-center mt-16 text-5xl font-black'>
        <div className='flex flex-col items-center'>
          <Text variant='low'>MEMORABLE</Text>
          <span>BRAND IDENTITY</span>
          <span>BRAND STRATEGY</span>
          <span>TYPOGRAPHY</span>
        </div>
        <Lottie className='h-1/2 w-1/2' path='animation.json' />
        <div className='flex flex-col items-center'>
          <Text variant='low'>DEVELOPING DIGITAL PRODUCTS</Text>
          <span>ART DIRECTION</span>
          <span>DIGITAL DESIGN</span>
          <span>DEVELOPMENT</span>
        </div>
      </div>
      <div className='flex flex-col tems-center justify-center'>
        <h2 className='text-[21vw] font-black'>V2.0 (2K23)</h2>
        <h2 className='font-blackstone text-9xl font-thin	'>by Somefolk</h2>
        <p>
          I'M ARTEM, A FREELANCE ART DIRECTOR, VISUAL DESIGNER, CREATIVE DEVELOPER AND HOUSEPLANT
          ENTHUSIAST BASED IN WINTER RUSSIA. I WORK WITH BRANDS OF ALL SIZES, ACROSS ALL INDUSTRIES,
          IN EVERY CORNER OF THE WORLD., CREATING MEMORABLE BRANDS AND DIGITAL PRODUCTS THAT
          RESONATE WITH THEIR AUDIENCE. I BELIEVE THAT STORIES TOLD AUTHENTICALLY & VISUALLY ARE
          MORE EFFECTIVE AT CAPTIVATING AUDIENCES, EVOKING EMOTION AND IMPROVING CONVERSION ...
          STORIES TOLD BY SOME REAL FOLK.
        </p>
      </div>
      <ScreenWrapper className='bg-somefolk'></ScreenWrapper>
      <ScreenWrapper className='bg-somefolk'></ScreenWrapper>
    </div>
  );
}

function Layout() {
  return (
    <div className='p-[1vw] h-auto leading-none mt-6 font-black'>
      <AnimatedTextRow>
        <h2 className='text-[21vw]'>RUSSIA</h2>
        <div className='w-[8vw] h-[1vw] bg-olive-100 mx-[0.5vw] mb-[4.5vw]' />
        <h2 className='text-[21vw]'>BASED</h2>
        <h2 className='text-[21vw] ml-[3.5vw]'>ART</h2>
      </AnimatedTextRow>
      <AnimatedTextRow>
        <h2 className='text-[21vw]'>DIRECTOR</h2>
        <div className='w-[1vw] h-[10vw] bg-olive-100 mx-[2vw] mb-[4.5vw]' />
        <h2 className='text-[21vw]'>DESIGNER</h2>
      </AnimatedTextRow>
      <AnimatedTextRow>
        <h2 className='text-[20vw]'>CREATIVE DEVELOPER</h2>
      </AnimatedTextRow>
    </div>
  );
}

type AnimatedTextRowProps = PropsWithChildren & {
  containerClassName?: string;
};

function AnimatedTextRow({ children, containerClassName }: AnimatedTextRowProps) {
  const intersectionOptions: IntersectionOptions = {
    runningOn: 'bottom',
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  };

  const animationOption: AnimationOptions = {
    end: -15,
    duration: 600,
  };

  const ref = useRef<HTMLDivElement>(null);

  const { targetRef, animation } = useScrollAnimation<HTMLDivElement>(
    intersectionOptions,
    animationOption
  );

  const showChangeValue = (v: number) => {
    if (ref.current) ref.current.style.transform = `translateY(${v}px)`;
  };

  useRequestAnimationFrame(showChangeValue, animation);

  return (
    <div ref={targetRef}>
      <div
        className={`flex items-center mb-[-4.5vw] tracking-[0.05vw] ${containerClassName}`}
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
}
