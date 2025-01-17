import Text from '../../components/Text';
import {
  BaseScrollable as Scrollable,
  ScrollConfiguration,
} from '../../components/Scrollable/Scrollable';

const circleParts = [
  { path: 'somefolk/wheel1.svg', spin: -0.45 },
  { path: 'somefolk/wheel2.svg', spin: 0.34 },
  { path: 'somefolk/wheel3.svg', spin: -0.5 },
  { path: 'somefolk/wheel4.svg', spin: 1 },
  { path: 'somefolk/wheel5.svg', spin: 0.25 },
  { path: 'somefolk/wheel6.svg', spin: -0.51 },
];

const offsetCSS = '--circleXOffset';
const spinCSS = '--spin';
const offsetImage1 = '--offsetImage1';
const offsetImage2 = '--offsetImage2';

const image1ScrollConfiguration: ScrollConfiguration<HTMLDivElement>[] = [
  {
    getStart: (node, position, meta) => position.top - meta.windowHeight,
    getEnd: (node, position, meta) => position.top + position.height + meta.windowHeight,
    mapTo: [-20, 15],
    mutate: (node, value) => node.style.setProperty(offsetImage1, `${value}%`),
  },
];

const image2ScrollConfiguration: ScrollConfiguration<HTMLDivElement>[] = [
  {
    getStart: (node, position, meta) => position.top - meta.windowHeight,
    getEnd: (node, position, meta) => position.top + position.height + meta.windowHeight,
    mapTo: [-20, 15],
    mutate: (node, value) => node.style.setProperty(offsetImage2, `${value}%`),
  },
];

export default function CircleSection() {
  return (
    <section className='mt-[2vh] mx-[2vw] flex flex-col items-center text-center'>
      <Text variant='medium-title' className='mb-4'>
        AS ARTIFICIAL INTELLIGENCE BECOMES A BUZZWORD FOR REPLACING HUMAN ABILITY, IT’S MORE
        IMPORTANT THAN EVER TO TELL YOUR STORY IN AN AUTHENTIC WAY
      </Text>
      <Text variant='small-bold' className='mb-4'>
        SOMEFOLK® BESPOKE QUALITY DIGITAL GOODS
      </Text>
      <Text variant='small' className='mb-60'>
        LENINA STREET | RUSSIA | MOSCOW
      </Text>
      <div className='flex h-[500vh] w-full'>
        <div className='w-2/3'>
          <Circle parts={circleParts} />
        </div>
        <div className='text-left flex flex-col w-[26vw] mb-28 mt-[200vh]'>
          <Text variant='medium' as='h4' className='mb-8'>
            I'M CURRENTLY TAKING ENQUIRIES FOR PROJECTS STARTING IN Q2 2024
          </Text>
          <Text variant='small-bold' as='p'>
            WHETHER YOU'RE A STARTUP LOOKING TO BUILD AN IDENTITY FROM THE GROUND UP, OR AN
            ESTABLISHED BRAND IN NEED OF A DIGITAL REFRESH, I'D LOVE TO HEAR YOUR STORY. I WORK WITH
            BRANDS ACROSS ALL SECTORS IN ALL CORNERS OF THE WORLD. I'M CURRENTLY TAKING ENQUIRIES
            FOR COLLABORATIONS IN THE FINAL QUARTER OF 2023.
          </Text>
          <div className='w-full my-32'>
            <Scrollable
              className='pt-[125%] relative overflow-hidden'
              configuration={image1ScrollConfiguration}
            >
              <img
                src='somefolk/pinkFlex.jpg'
                className='absolute top-0 h-[120%] bg-no-repeat bg-cover'
                style={{ transform: `translateY(var(${offsetImage1}))` }}
              />
            </Scrollable>
          </div>
          <Text variant='medium' as='h4' className='mb-8'>
            RECOGNITION
          </Text>
          <Text variant='small-bold' as='p' className='mb-12'>
            I'M CONSTANTLY INSPIRED BY THE WIDER DESIGN COMMUNITY, AND HAVE BEEN FORTUNATE ENOUGH TO
            RECEIVE RECOGNITION FOR MY WORK FOR SEVERAL CLIENT PROJECTS OVER THE PAST COUPLE OF
            YEARS.
          </Text>
          <div className='flex justify-between'>
            <Text variant='small-bold'>AWWWARDS SITE OF THE DAY X4</Text>
            <Text variant='small-bold'>INDEPENDENT</Text>
          </div>
          <div className='h-[1px] w-full bg-olive-100 my-2' />
          <div className='flex justify-between'>
            <Text variant='small-bold'>AWWWARDS SITE OF THE DAY X3</Text>
            <Text variant='small-bold'>AGENCY PARTNER</Text>
          </div>
          <div className='h-[1px] w-full bg-olive-100 my-2' />
          <Text variant='small-bold'>FWA SITE OF THE DAY X4</Text>
          <div className='h-[1px] w-full bg-olive-100 my-2' />
          <Text variant='small-bold'>CSS SITE OF THE DAY X3</Text>
          <div className='w-full my-32'>
            <Scrollable
              className='pt-[125%] relative overflow-hidden'
              configuration={image2ScrollConfiguration}
            >
              <img
                src='somefolk/monkey.jpg'
                className='absolute top-0 h-[120%] bg-no-repeat bg-cover'
                style={{ transform: `translateY(var(${offsetImage2}))` }}
              />
            </Scrollable>
          </div>
          <Text variant='medium' as='h4' className='mb-8'>
            SOCIAL INACTIVITY
          </Text>
          <Text variant='small-bold' as='p' className='mb-12'>
            FOR VERY OCCASIONAL AND UNPREDICTABLE NUGGETS OF USEFUL AND USELESS INFORMATION (IN
            EQUAL MEASURE), PLEASE FEEL FREE TO FOLLOW MY SOCIAL CHANNELS:
          </Text>
          <div className='flex justify-between'>
            <Text variant='small-bold'>INSTAGRAM</Text>
            <Text variant='small-bold'>@BYSOMEFOLK</Text>
          </div>
          <div className='h-[1px] w-full bg-olive-100 my-2' />
          <div className='flex justify-between'>
            <Text variant='small-bold'>AWWWARDS</Text>
            <Text variant='small-bold'>/SOMEFOLK</Text>
          </div>
          <div className='h-[1px] w-full bg-olive-100 my-2' />
          <div className='flex justify-between'>
            <Text variant='small-bold'>LINKEDIN</Text>
            <Text variant='small-bold'>/SOMEFOLK</Text>
          </div>
          <div className='h-[1px] w-full bg-olive-100 my-2' />
          <div className='flex justify-between'>
            <Text variant='small-bold'>DRIBBLE</Text>
            <Text variant='small-bold'>/SOMEFOLK</Text>
          </div>
          <div className='h-[1px] w-full bg-olive-100 my-2' />
        </div>
      </div>
    </section>
  );
}

const circleScrollConfiguration: ScrollConfiguration<HTMLDivElement>[] = [
  {
    getStart: (node, position, meta) => position.top + meta.windowHeight * 0.5,
    getEnd: (node, position, meta) => position.top + position.height + meta.windowHeight * 5,
    mapTo: [0, 100],
    mutate: (node, value) => node.style.setProperty(spinCSS, `${value}deg`),
  },
  {
    getStart: (node, position, meta) => position.top + meta.windowHeight * 0.5,
    getEnd: (node, position, meta) => position.top + position.height + meta.windowHeight * 1.5,
    mapTo: [14, 31, 31, 14],
    mutate: (node, value) => node.style.setProperty(offsetCSS, `${value}vw`),
  },
];

interface CircleProps {
  parts: { path: string; spin: number }[];
}

function Circle({ parts }: CircleProps) {
  return (
    <Scrollable
      className='w-full h-screen flex items-center sticky top-0'
      configuration={circleScrollConfiguration}
    >
      <div
        className='w-[38vw] h-[38vw] relative will-change-transform'
        style={{ transform: `translateX(var(${offsetCSS}))` }}
      >
        {parts.map(({ path, spin }, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${path})`,
              transform: `rotate(calc(var(${spinCSS}) * ${spin}))`,
            }}
            className='w-full h-full bg-no-repeat bg-contain absolute will-change-transform'
          />
        ))}
      </div>
    </Scrollable>
  );
}
