"use client";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PlaneIcon } from '@/svgs/Icons';
import { Inika } from 'next/font/google';
import AnimatedText from '@/utils/framer/AnimatedText';
import { useState,useEffect } from 'react';
import {Image} from "@nextui-org/react";
import NextImage from 'next/image';

export default function HeroSection() {
  const [bounceCount, setBounceCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (bounceCount < 2) {
        setBounceCount(bounceCount + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => setBounceCount(0), 5000); // Reset bounce count after 10 seconds
      }
    }, 500); // Adjust interval duration as needed

    return () => clearInterval(interval);
  }, [bounceCount]);
  return (
    <div className="relative isolate overflow-hidden">
       <motion.svg
       initial={{ opacity: 0, }}
       animate={{ opacity: 1}}
       transition={{ duration: 0.5 }}
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </motion.svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
      
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-4 sm:pb-32 lg:flex lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
        
          <motion.div 
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.9 }}
            initial={{ y: 10, opacity: 0}}
            animate={{
              y: bounceCount === 1 ? [0,-7, 0] : bounceCount === 2 ? [0, -7, 0] : 0,
              opacity: 1
            }}
          className="mt-24 sm:mt-32 lg:mt-16 inline-flex space-x-4 items-end">
            
            <span className="rounded-full bg-[#0065D6]/10 px-3 py-1 font-semibold text-sm font-regular leading-6  text-[#0065D6] ring-1 ring-inset ring-[#0065D6]flex gap-2 justify-center items-center">
                Try now!
              </span>
              <Link href="https://travel.prevodr.com/" target='_blank' className="">
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span className='text-medium text-white hover:text-[#0065D6] flex items-center gap-2'>
                <PlaneIcon className="h-5 w-5" fill={'white'}/>
                    Prevodr Travel Portal</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
              </span>
            </Link>
          </motion.div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
  <AnimatedText className="block" text={'Elevate your online presence in just'} delay={0.1} duration={1}/>
  <AnimatedText duration={1.5} className="bg-clip-text text-transparent bg-gradient-to-b block from-[#5EA2EF] to-[#0065D6]" text={'4 simple steps'} delay={0.1}/>
  <AnimatedText text={'with'} className="block" duration={1.5} delay={0.1}/>
  <AnimatedText text={'Prevodr Agency'} className="bg-clip-text text-transparent bg-gradient-to-b from-[#5EA2EF] to-[#0065D6] inline"  delay={0.1} duration={1.5}/>
</h1>
<AnimatedText
          text={"Prevodr Agency streamlines website creation. Just share your company details, and we'll handle the rest."} delay={0.1} duration={1}
          className="mt-6 text-lg leading-8 text-gray-300" />

          <div className="mt-10 flex items-center gap-x-6">
            <motion.div
             whileTap={{ scale: 1.1 }}
             whileHover={{ scale: 0.9 }}
            >
            <Link
              href="/hire"
              className="rounded-md  bg-white drop-shadow-xl px-3.5 py-2.5 text-md font-semibold text-[#0065D6] hover:text-white shadow-sm hover:bg-[#0065D6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0065D6]"
            >
              Get started
            </Link>

            </motion.div>
           <motion.div
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.9 }}
              >
                 <Link href="#" className="text-md font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
              </motion.div>

          </div>
        </div>
        <motion.div
         initial={{ x: 100, opacity: 1}}
         animate={{ y: [0,-20, 0, -10, 0] }} // Animate in a loop with bounce effect
         transition={{ duration: 4, ease: "easeInOut",repeat: Infinity }} // Duration and ease

        className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
            as={NextImage}
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              isBlurred
              isZoomed
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
