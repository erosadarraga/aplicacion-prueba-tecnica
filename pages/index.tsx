import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nieve from '../public/Sleet.png'
import Shower from "../public/Shower.png"
import { IoIosSnow } from 'react-icons/Io';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/Io';

import { RiTelegramLine } from 'react-icons/Ri';
import Rayos from '../public/HeavyRain.png'
import Sol from '../public/LightCloud.png'
import { useState } from 'react';



const Home: NextPage = () => {



  const [open, setOpen] = useState(false);

  return (<div className=' md:grid md:grid-cols-3'>
    <section className=' bg-backgroundMobil3   '>
      <nav className='h-screen  bg-opacity-12  w-11/12 relative  flex flex-col  mx-auto ' >
        <div className={` absolute  bg-white z-auto  left-0 right-0 transition-all duration-500 ease-in ${open ? 'top-0 ' : 'top-[-490px]'}`}>

          <div className='flex flex-row justify-end py-4 text-2xl'>
            <IoMdClose onClick={() => setOpen(!open)} className='text-backgroundMobil1' />
          </div>
          <div className="flex items-center justify-between pb-4">
            <div className='relative '>
              <input
                type="text"
                className="flex-1 flex pl-9 bg-transparent border-2 border-backgroundMobil1 py-3 items-center text-left focus:outline-none text-backgroundMobil2"
                placeholder="Search localition"
              />
              <div className='absolute inset-y-0 left-2 flex items-center '><BiSearchAlt2 className='text-backgroundMobil2' /></div>
            </div>


            <button
              className="px-6 py-3 text-backgroundMobil1 bg-backgroundSidebar  bg-brightRed hover:bg-brightRedLight focus:outline-none "
            >
              Search
            </button>
          </div>
          <div className='flex text-backgroundMobil1 flex-col justify-between space-y-4 '>
            <div className=' cursor-pointer p-5 border-2 border-backgroundMobil2 flex flex-row justify-between '>
              <p>London</p>
              <p>{">"}</p>
            </div>
            <div className=' p-5'>
              <p>Barcelona</p>
            </div>
            <div className=' p-5'>
              <p>Long Beach</p>
            </div>
          </div>
        </div>

        {!open && (<><div className='flex flex-row justify-between mx-3 my-3'>
          <div onClick={() => setOpen(!open)} className='px-4 py-2 bg-backgroundMobil4'><p className='text-backgroundMobil1 text-opacity-0'>Seach for places</p></div>

          <div className='flex'>
            <div className='bg-backgroundMobil2 p-2 self-center rounded-full text-backgroundMobil1'>
              <IoIosSnow />
            </div>
          </div>
        </div>
          <div className='bg-[url("../public/Cloud-background.png")] opacity-50 bg-center bg-cover  bg-no-repeat flex justify-center '>
            <div className='h-64 mt-3'>
              <Image src={Shower} width={150} className="opacity-100 self-center" height={174} />
            </div>
          </div>

          <div className='flex flex-row justify-center '>
            <div className='flex flex-row justify-center items-start w-48 h-40'>
              <span className='text-backgroundMobil1 text-8xl pt-2 tracking-tighter '>1</span>
              <span className='text-backgroundMobil1 text-9xl tracking-tighter'>5</span>
              <p className='text-backgroundMobil4 text-6xl pt-10 tracking-tighter' >°c</p>
            </div>

          </div>

          <div className='flex justify-center'>
            <h2 className='text-backgroundMobil2 text-4xl  pb-8'>Shower</h2>
          </div>
          <div className='flex flex-row justify-center'>
            <div className='flex flex-row justify-between space-x-4 text-backgroundMobil7'>
              <p>Today</p>
              <p>.</p>
              <p>Fri, 5 Jun</p>
            </div>

          </div> </>)}
      </nav>
    </section>
    <section className='bg-backgroundMobil6 col-span-2 md:container mx-auto relative'>
      <div className='hidden md:flex md:flex-row md:w-4/5 mx-auto md:justify-end py-4 space-x-1'>
        <div className='w-10 h-10 bg-backgroundMobil1 rounded-full border-2 border-black flex justify-center items-center text-backgroundMobil3 font-bold '><p className=' '>°C</p></div>
        <div className="flex justify-center font-bold w-10 h-10 bg-backgroundMobil2 border-backgroundMobil2 items-center  rounded-full border-2 text-center text-backgroundMobil1 "><p>°F</p></div>
      </div>
      <div className='grid grid-cols-2 md:flex md:flex-row md:justify-between  md:w-4/5 mx-auto  gap-10 md:px-0 px-8 py-6 text-backgroundMobil1'>

        <div className='flex flex-col px-3  py-3 justify-evenly  bg-backgroundMobil3 items-center '>
          <p className='text-lg'> Tomorrow</p>
          <div className='text-center'><Image src={Nieve} width={56.44} height={62} /></div>
          <div >
            <div className='flex flex-row space-x-2'>
              <div className='flex flex-row'>
                <p>1</p>
                <p>6</p>
                <p>c</p>
              </div>
              <div className='flex flex-row '>
                <p>1</p>
                <p>1</p>
                <p>c</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex flex-col px-3  py-3 justify-evenly bg-backgroundMobil3 items-center '>
          <p className='text-lg'> Tomorrow</p>
          <div className='text-center'><Image src={Nieve} width={56.44} height={62} /></div>
          <div >
            <div className='flex flex-row space-x-2'>
              <div className='flex flex-row'>
                <p>1</p>
                <p>6</p>
                <p>c</p>
              </div>
              <div className='flex flex-row '>
                <p>1</p>
                <p>1</p>
                <p>c</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex flex-col px-3   py-3 justify-evenly bg-backgroundMobil3 items-center '>
          <p className='text-lg'> Tomorrow</p>
          <div className='text-center'><Image src={Nieve} width={56.44} height={62} /></div>
          <div >
            <div className='flex flex-row space-x-2'>
              <div className='flex flex-row'>
                <p>1</p>
                <p>6</p>
                <p>c</p>
              </div>
              <div className='flex flex-row '>
                <p>1</p>
                <p>1</p>
                <p>c</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex flex-col px-3  py-3 justify-evenly bg-backgroundMobil3 items-center '>
          <p className='text-lg'> Tomorrow</p>
          <div className='text-center'><Image src={Sol} width={56.44} height={62} /></div>
          <div >
            <div className='flex flex-row space-x-2'>
              <div className='flex flex-row'>
                <p>1</p>
                <p>6</p>
                <p>c</p>
              </div>
              <div className='flex flex-row '>
                <p>1</p>
                <p>1</p>
                <p>c</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex flex-col px-3  py-3 justify-evenly bg-backgroundMobil3 items-center '>
          <p className='text-lg'> Tomorrow</p>
          <div className='text-center'><Image src={Rayos} width={56.44} height={62} /></div>
          <div >
            <div className='flex flex-row space-x-2'>
              <div className='flex flex-row'>
                <p>1</p>
                <p>6</p>
                <p>c</p>
              </div>
              <div className='flex flex-row '>
                <p>1</p>
                <p>1</p>
                <p>c</p>
              </div>
            </div>

          </div>
        </div>



      </div>
      <div className='w-11/12 md:w-4/5 mx-auto '>

        <h1 className='text-backgroundMobil1 py-5 text-xl'>Today’s Hightlights </h1>
        <div className='grid grid-row-4 gap-y-8 pb-20 md:grid-cols-2  md:gap-9 items-center text-backgroundMobil1'>

          <div className='flex flex-col justify-evenly items-center  h-48  bg-backgroundMobil3  '>
            <p className='text-backgroundMobil2 text-lg '>Wind status</p>
            <div className='flex flex-row justify-start '>
              <p className='text-6xl'>7</p>
              <p className='text-3xl self-center'>mph</p>
            </div>
            <div className='flex flex-row justify-between space-x-2'>
              <div className='text-center flex justify-center items-center  '><RiTelegramLine /></div>
              <p>WSW</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center  h-48  bg-backgroundMobil3  '>
            <p className='text-backgroundMobil2 text-lg '>Humidity</p>
            <div className='flex flex-row justify-start '>
              <p className='text-6xl'>8</p>
              <p className='text-3xl self-center'>4</p>
              <p className='text-3xl self-center'>%</p>
            </div>
            <div className='flex flex-col w-48 '>
              <div className='flex flex-row justify-between'>
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div className='flex flex-col justify-start relative'>
                <span className='h-1 bg-backgroundMobil5 absolute w-4/5'>  </span>
                <span className='h-1 bg-backgroundMobil1  w-full'>  </span>
                <span className='  w-full self-center text-right'>%  </span>

                <span></span>
              </div>
            </div>
          </div>


          <div className='flex flex-col justify-evenly items-center  h-32  bg-backgroundMobil3  '>
            <p className='text-backgroundMobil2 text-lg '>Visibility</p>
            <div className='flex flex-row justify-end items-end  '>
              <p className='text-6xl pb-3'>6,</p>
              <p className=' text-5xl pb-1.5 '>4</p>
              <p className='text-3xl self-center'>miles</p>
            </div>

          </div>

          <div className='flex flex-col justify-evenly items-center  h-32  bg-backgroundMobil3  '>
            <p className='text-backgroundMobil2 text-lg '>Air Pressure</p>
            <div className='flex flex-row justify-start '>
              <p className='text-6xl'>99</p>
              <p className=''>8</p>
              <p className='text-3xl self-center'>mb</p>
            </div>

          </div>

        </div>
      </div>
      <div className='flex justify-center p-8  absolute bottom-0 right-0 left-0'>
        <h3 className='text-backgroundMobil1'>created by username - devChallenges.io</h3>
      </div>

    </section>
  </div>
  )
}

export default Home
