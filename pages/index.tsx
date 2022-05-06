import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nieve from '../public/Sleet.png'
import Shower from "../public/Shower.png"
import { IoIosSnow } from 'react-icons/Io';
import { RiTelegramLine } from 'react-icons/Ri';
import Rayos from '../public/HeavyRain.png'
import Sol from '../public/LightCloud.png'



const Home: NextPage = () => {
  return (<div className=' md:grid md:grid-cols-3'>
    <section className=' bg-backgroundMobil3   '>
      <nav className='h-screen  bg-opacity-12     flex flex-col  mx-auto ' >
        <div className='flex flex-row justify-between mx-3 my-3'>
          <div className='px-4 py-2 bg-backgroundMobil4'><p className='text-backgroundMobil1 text-opacity-0'>Seach for places</p></div>

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
        {/* shower */}
        <div className='flex justify-center'>
          <h2 className='text-backgroundMobil2 text-4xl  pb-8'>Shower</h2>
        </div>
        <div className='flex flex-row justify-center'>
          <div className='flex flex-row justify-between space-x-4 text-backgroundMobil7'>
            <p>Today</p>
            <p>.</p>
            <p>Fri, 5 Jun</p>
          </div>

        </div>
      </nav>
    </section>
    <section className='bg-backgroundMobil6 col-span-2 '>
      <div className='hidden md:flex md:flex-row'>
        <div className='flex justify-center items-center text-center text-backgroundMobil3 bg-backgroundMobil1 rounded-[50%]   my-0 m-auto '><p className=' '>°C</p></div>
        <div className="flex justify-center text-center text-backgroundMobil1 p-2"><p>°F</p></div>
      </div>
      <div className='grid grid-cols-2 md:flex md:flex-row md:justify-between md:p-  gap-10 p-8 text-backgroundMobil1'>

        <div className='flex flex-col px-1 py-2 justify-evenly bg-backgroundMobil3 items-center '>
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
        <div className='flex flex-col px-1 py-2 justify-evenly bg-backgroundMobil3 items-center '>
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
        <div className='flex flex-col px-1 py-2 justify-evenly bg-backgroundMobil3 items-center '>
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
        <div className='flex flex-col px-1 py-2 justify-evenly bg-backgroundMobil3 items-center '>
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
        <div className='flex flex-col px-1 py-2 justify-evenly bg-backgroundMobil3 items-center '>
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
      <div className='w-11/12 mx-auto'>
        <h1 className='text-backgroundMobil1 py-5 text-xl'>Today’s Hightlights </h1>
        <div className='grid-cols-4 space-y-4 pb-20  items-center text-backgroundMobil1'>

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
      <div className='flex justify-center p-4'>
        <h3 className='text-backgroundMobil1'>created by username - devChallenges.io</h3>
      </div>

    </section>



  </div>
  )
}

export default Home
