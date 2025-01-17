import { Variants, motion } from 'framer-motion';
import { getSomefolkImageUrl } from '../../utils/getImageUrl';
import Text from '../Text';

const barcode = getSomefolkImageUrl('barcode', 'svg');
const founded = getSomefolkImageUrl('founded', 'svg');
const address = getSomefolkImageUrl('address', 'svg');

const offsetHover: Variants = {
  hover: {
    y: '-50%',
    transition: {
      delay: 0.05,
      duration: 0.2,
    },
  },
};

const barcodeAnimation: Variants = {
  initial: {},
  animate: {
    x: '-100%',
    transition: {
      ease: 'linear',
      duration: 10,
      repeat: Infinity,
    },
  },
};

const opacityAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  animate: (delay) => ({
    opacity: 1,
    transition: {
      duration: 0.75,
      delay,
    },
  }),
};

export default function OverlayLayer() {
  return (
    <div className='w-screen h-screen top-0 left-0 absolute overflow-hidden flex flex-col justify-between text-[#bfea88] p-4 font-arges z-10'>
      <motion.div
        className='flex justify-between text-lg font-normal'
        variants={opacityAnimation}
        custom={3.25}
        initial='initial'
        animate='animate'
      >
        <div>
          <span className='font-mori font-semibold text-base'>INSTAGRAM</span>
          <div className='font-black text-[9rem] overflow-hidden h-32 leading-none'>
            <motion.div
              className='flex flex-col'
              initial='initial'
              whileHover='hover'
              variants={offsetHover}
            >
              <span>INFO</span>
              <span>INFO</span>
            </motion.div>
          </div>
        </div>
        <span className='text-3xl font-semibold'>AVAILABLE IN 2024</span>
        <div className='flex flex-col items-end'>
          <span className='font-mori font-semibold text-base'>SAFE ANIMALS</span>
          <div className='font-black text-[9rem] overflow-hidden h-32 leading-none'>
            <motion.div
              className='flex flex-col'
              initial='initial'
              whileHover='hover'
              variants={offsetHover}
            >
              <span>WORK</span>
              <span>WORK</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={opacityAnimation}
        custom={3.75}
        initial='initial'
        animate='animate'
        className='flex justify-between items-end'
      >
        <div className='flex flex-col gap-4 w-fit'>
          <div className='flex gap-4 justify-between items-center'>
            <img src={founded} />
            <div className='overflow-hidden w-[8vw] h-fit'>
              <motion.div className='flex' variants={barcodeAnimation} animate='animate'>
                <img src={barcode} className='w-[9vw]' />
                <img src={barcode} className='w-[9vw]' />
                <img src={barcode} className='w-[9vw]' />
              </motion.div>
            </div>
          </div>
          <div>
            <img src={address} className='w-[15vw]' />
          </div>
        </div>
        <div className='flex flex-col items-center leading-none'>
          <span className='text-[1.7rem] font-bold pb-1'>WORKING ON PROJECTS FOR</span>
          <div className='flex gap-4 text-5xl font-black pb-1'>
            <span>BRAND</span>
            <span>DIRECTION</span>
            <span>DIGITAL</span>
          </div>
          <div className='flex gap-2 tracking-wide items-center'>
            <Text variant='medium-bold'>COLLABORATING</Text>
            <Text variant='small'>WITH</Text>
            <Text variant='medium-bold'>AMBITIOUS BRANDS</Text>
            <Text variant='small'>THAT HAVE</Text>
            <Text variant='medium-bold'>POWERFUL STORIES</Text>
            <Text variant='small'>TO TELL</Text>
          </div>
          <div className='flex gap-2 tracking-wide items-center'>
            <Text variant='small'>I WORK</Text>
            <Text variant='medium-bold'>INDEPENDENTLY</Text>
            <Text variant='small'>AND WITH CREATIVE</Text>
            <Text variant='medium-bold'>FREELANCERS, STUDIOS</Text>
            <Text variant='small'>AND</Text>
            <Text variant='medium-bold'>AGENCIES</Text>
          </div>
        </div>
        <div className='w-[20%]' />
      </motion.div>
    </div>
  );
}
