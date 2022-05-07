import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nieve from '../public/Sleet.png'
import Shower from "../public/Shower.png"
import { MdOutlineGpsFixed } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/Io';
import { MdLocationOn } from 'react-icons/md';
import { RiTelegramLine } from 'react-icons/ri';
import Rayos from '../public/HeavyRain.png'
import Sol from '../public/LightCloud.png'
import { useState } from 'react';
import SolNaviente from '../public/Clear.png';
import Thunderstorm from '../public/Thunderstorm.png'



const Home: NextPage = () => {



  const [open, setOpen] = useState(false);

  return (<div className=' md:grid md:grid-cols-3'>
    <section className=' bg-backgroundMobil3   '>
      <nav className='h-screen  bg-opacity-12  w-11/12  relative  flex flex-col  mx-auto ' >
        <div className={` absolute  bg-white font-Raleway z-auto  left-0 right-0 transition-all duration-500 ease-in ${open ? 'top-0 ' : 'top-[-490px]'}`}>

          <div className='flex  flex-row justify-end py-4  text-2xl'>
            <IoMdClose onClick={() => setOpen(!open)} className='text-backgroundMobil1 text-3xl cursor-pointer hover:opacity-70' />
          </div>
          <div className="flex items-center justify-between pb-6">
            <div className='relative '>
              <input
                type="text"
                className="flex-1 flex pl-9 bg-transparent border-2 border-backgroundMobil1 py-4 items-center text-left focus:outline-none text-medium text-[16px] leading-[18.78px] text-backgroundMobil2"
                placeholder="Search localition"
              />
              <div className='absolute inset-y-0 left-2 flex items-center '><BiSearchAlt2 className='text-backgroundMobil2' /></div>
            </div>


            <button
              className="px-6 text-[16px] leading-[18.78px] font-semibold py-4 text-backgroundMobil1 bg-backgroundSidebar hover:opacity-70  bg-brightRed hover:bg-brightRedLight focus:outline-none "
            >
              Search
            </button>
          </div>
          <div className='flex text-medium font-medium text-[16px] leading-[18.78px] text-backgroundMobil1 flex-col justify-between space-y-4 '>
            <div className=' cursor-pointer  p-5 border-2 border- flex flex-row justify-between  '>
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

        {!open && (<><div className='flex flex-row justify-between mx-3 my-3 '>
          <div onClick={() => setOpen(!open)} className='cursor-pointer hover:opacity-70 px-4 py-2 font-Raleway text-base bg-search'><p className='text-backgroundMobil1 '>Seach for places</p></div>

          <div className='flex'>
            <div className='bg-search p-2 self-center rounded-full text-backgroundMobil1'>
              <MdOutlineGpsFixed className='text-xl ' />
            </div>
          </div>
        </div>
          <div className='relative'>
            <div className='h-80 mt-3 bg-[url("../public/Cloud-background.png")] opacity-10 bg-center bg-cover  bg-no-repeat flex justify-center '>
            </div>
            <div className='flex justify-center p-8  absolute bottom-0 right-0 left-0'>
              <Image src={Shower} className=" h:[174px] md:w[202px] md:h[234px] w-[150px]" />
            </div>
          </div>

          <div className='flex flex-row justify-center pb-4 md:pb-20'>
            <div className='flex flex-row justify-center font-Raleway items-end w-48 h-40'>
              <span className='text-backgroundMobil1 text-[144px] leading-[169.06px] font-light pt-2 tracking-tighter '>1</span>
              <span className='text-backgroundMobil1 text-[144px] leading-[169.06px] font-medium'>5
              </span>
              <p className='text-backgroundMobil4 text-7xl pb-3 leading-[56.35px] font-normal'>°</p>
              <p className='text-backgroundMobil4 text-6xl leading-[56.35px] font-medium pb-6 tracking-tighter' >c</p>
            </div>

          </div>

          <div className='flex justify-center md:pb-20 '>
            <h2 className='text-backgroundMobil2 font-Raleway text-[36px] font-semibold leading-[42.26px]  pb-8'>Shower</h2>
          </div>

          <div className='flex pb-4 flex-row justify-center items-start text-center font-Raleway'>
            <div className='flex flex-row justify-between space-x-4 text-backgroundMobil7'>
              <p className='text-[18px] font-medium leading-[21.13px]'>Today</p>

              <p className='text-[18px] font-medium text-center self-center pb-4 '>•</p>


              <p>Fri, 5 Jun</p>
            </div>

          </div>
          <div className='font-Raleway flex flex-row justify-center space-x-1 text-backgroundMobil2'>
            <div><MdLocationOn className='text-2xl' /></div>
            <p className=''>Helsinki</p>
          </div>
        </>)}
      </nav>
    </section>
    <section className='bg-backgroundMobil6 col-span-2 md:container mx-auto relative'>

      <div className='hidden md:flex md:flex-row md:w-4/5 mx-auto md:justify-end py-6 space-x-1'>

        <div className='w-10 h-10 bg-backgroundMobil1 rounded-full border-2 border-backgroundMobil1 flex justify-center items-center text-backgroundMobil3 font-bold '><p className=' '>°C</p></div>

        <div className="flex justify-center font-bold w-10 h-10 bg-backgroundf border-backgroundf items-center  rounded-full border-2 text-center text-backgroundMobil1 "><p>°F</p></div>
      </div>

      <div className='grid font-Raleway grid-cols-2 md:flex md:flex-row md:justify-between  md:w-4/5 mx-auto  gap-10 md:px-0 px-8 py-6 text-backgroundMobil1'>

        <div className='flex flex-col px-3  py-4 justify-evenly  bg-backgroundMobil3 items-center '>
          <p className='text-[16px] leading-[18.78px] font-medium'> Tomorrow</p>
          <div className='relative'>
            <div className='text-center  '>
              <Image src={Nieve} className="z-20" width={56.44} height={62} />
            </div>
            <div className='absolute left-0 top-0 z-10'>
              <Image src={SolNaviente} className="" width={30.44} height={32} />
            </div>
          </div>
          <div >
            <div className='flex flex-row space-x-2'>
              <div className='flex flex-row'>
                <p>1</p>
                <p>6</p>
                <p>°</p>
                <p>C</p>
              </div>
              <div className='flex flex-row text-backgroundMobil2 '>
                <p>1</p>
                <p>1</p>
                <p>°</p>
                <p>C</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex flex-col px-3  py-4 justify-evenly bg-backgroundMobil3 items-center '>
          <p className='text-[16px] leading-[18.78px] font-medium'> Sun, 7 Jun</p>
          <div className='relative'>
            <div className='text-center  '>
              <Image src={Nieve} className="z-20" width={56.44} height={62} />
            </div>
            <div className='absolute left-0 top-0 z-10'>
              <Image src={SolNaviente} className="" width={30.44} height={32} />
            </div>
          </div>
          <div >
            <div className='flex flex-row space-x-2'>
              <div className='flex flex-row'>
                <p>1</p>
                <p>6</p>
                <p>°</p>
                <p>C</p>
              </div>
              <div className='flex flex-row text-backgroundMobil2 '>
                <p>1</p>
                <p>1</p>
                <p>°</p>
                <p>C</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex flex-col px-3   py-4 justify-evenly bg-backgroundMobil3 items-center '>
          <p className='text-[16px] leading-[18.78px] font-medium'> Mon, 8 Jun</p>
          <div className='relative'>
            <div className='text-center  '>
              <Image src={Thunderstorm} className="z-20" width={56.44} height={62} />
            </div>
            <div className='absolute left-0 top-0 z-10'>
              <Image src={SolNaviente} className="" width={30.44} height={32} />
            </div>
          </div>
          <div >
            <div className='flex flex-row space-x-2'>
              <div className='flex flex-row'>
                <p>1</p>
                <p>6</p>
                <p>°</p>
                <p>C</p>
              </div>
              <div className='flex flex-row text-backgroundMobil2 '>
                <p>1</p>
                <p>1</p>
                <p>°</p>
                <p>C</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex flex-col px-3   py-4 justify-evenly bg-backgroundMobil3 items-center '>
          <p className='text-[16px] leading-[18.78px] font-medium'> Tue, 9 Jun</p>
          <div className='relative'>
            <div className='text-center  '>
              <Image src={Sol} className="z-20" width={56.44} height={62} />
            </div>

          </div>
          <div >
            <div className='flex flex-row space-x-2'>
              <div className='flex flex-row'>
                <p>1</p>
                <p>6</p>
                <p>°</p>
                <p>C</p>
              </div>
              <div className='flex flex-row text-backgroundMobil2 '>
                <p>1</p>
                <p>1</p>
                <p>°</p>
                <p>C</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex flex-col px-3   py-4 justify-evenly bg-backgroundMobil3 items-center '>
          <p className='text-[16px] leading-[18.78px] font-medium'> Wed, 10 Jun</p>
          <div className='relative'>
            <div className='text-center  '>
              <Image src={Rayos} className="z-20" width={56.44} height={62} />
            </div>

          </div>
          <div >
            <div className='flex flex-row space-x-2'>
              <div className='flex flex-row'>
                <p>1</p>
                <p>6</p>
                <p>°</p>
                <p>C</p>
              </div>
              <div className='flex flex-row text-backgroundMobil2 '>
                <p>1</p>
                <p>1</p>
                <p>°</p>
                <p>C</p>
              </div>
            </div>

          </div>
        </div>






      </div>
      <div className='w-11/12 md:w-4/5 mx-auto pb-24 md-pb-0'>

        <h1 className='text-backgroundMobil1 py-6 text-[24px] leading-[28.18px] font-bold'>Today’s Hightlights </h1>
        <div className='grid grid-row-4 gap-y-8 pb-20 md:grid-cols-2  md:gap-9 items-center text-backgroundMobil1 font-Raleway'>

          <div className='flex flex-col justify-evenly items-center  h-48  bg-backgroundMobil3  '>
            <p className='text-backgroundMobil1 text-[16px] font-medium leading-[18.78px] '>Wind status</p>
            <div className='flex flex-row justify-center items-end '>
              <p className='text-[64px] leading-[75.14px] font-bold'>7</p>
              <p className='text-[36px] leading-[42.26px] font-medium pb-2'>mph</p>
            </div>
            <div className='flex flex-row justify-between items-center space-x-2'>
              <div className='text-center rotate-180 flex justify-center items-center '>
                <RiTelegramLine className=' text-backgroundMobil2 bg-backgroundMobil3  text-2xl' />
              </div>
              <p className='text-[14px] leading-[16.44px] font-medium'>WSW</p>
            </div>
          </div>
          <div className='flex flex-col justify-evenly items-center  h-48  bg-backgroundMobil3  '>
            <p className='text-backgroundMobil1 text-[16px] font-medium leading-[18.78px] '>Humidity</p>
            <div className='flex flex-row justify-between '>
              <p className=' text-[64px] font-bold leading-[75.14px] '>8</p>
              <p className='text-[64px] font-bold leading-[75.14px] '>4</p>
              <p className='text-[36px] font-normal leading-[42.26px] self-end pb-2  '>%</p>
            </div>
            <div className='flex flex-col w-48  '>
              <div className='flex flex-row justify-between  pb-1 text-backgroundMobil2'>
                <p className='text-[12px] font-bold leading-[14.09px]'>0</p>
                <p className='text-[12px] font-bold leading-[14.09px]'>50</p>
                <p className='text-[12px] font-bold leading-[14.09px]'>100</p>
              </div>
              <div className='flex flex-col justify-start relative'>
                <span className='h-1 bg-backgroundMobil5 absolute w-4/5'>  </span>
                <span className='h-1 bg-backgroundMobil1  w-full'>  </span>
                <span className=' text-backgroundMobil2 pt-1  text-[12px] font-bold leading-[14.09px] w-full self-center text-right'>%  </span>

                <span></span>
              </div>
            </div>
          </div>


          <div className='flex flex-col justify-evenly items-center py-2  h-36  bg-backgroundMobil3  '>
            <p className='text-backgroundMobil1 text-[16px] font-medium leading-[18.78px] '>Visibility</p>
            <div className='flex flex-row justify-center items-center  '>
              <p className=' text-[64px] font-bold leading-[75.14px]'>6,</p>
              <p className=' text-[64px] font-bold leading-[75.14px]'>4</p>
              <p className='text-[36px] font-medium leading-[42.26px] pt-4 pl-2'>miles</p>
            </div>

          </div>

          <div className='flex flex-col justify-evenly items-center py-2  h-36  bg-backgroundMobil3  '>
            <p className='text-backgroundMobil1 text-[16px] font-medium leading-[18.78px]'>Air Pressure</p>
            <div className='flex flex-row justify-between  '>
              <p className='text-[64px] font-bold leading-[75.14px]'>99</p>
              <p className='text-[64px] font-bold leading-[75.14px]'>8</p>
              <p className='text-[36px] font-medium leading-[42.26px] self-end ml-4 pb-2'>mb</p>
            </div>

          </div>

        </div>
      </div>
      <div className='flex text-backgroundMobil2 flex-row justify-center p-6 font  absolute bottom-0 right-0 left-0'>
        <p className=' text-[14px] leading-[17.07px] font-medium'>created by </p>
        <p className='text-[14px] leading-[17.07px] font-bold px-1 underline'> username</p>
        <p className=' text-[14px] leading-[17.07px] font-medium'> - devChallenges.io</p>
      </div>

    </section>
  </div>
  )
}

export default Home
