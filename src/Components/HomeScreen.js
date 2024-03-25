import React from 'react'
import "../StyleSheet/homeScreen.css"
import reverse from "../images/reverse_plank.jpg";
import running from "../images/running_gif.gif";
import crawl from "../images/crawl_gif.gif";
import burpee from "../images/burpee.gif";
import jumps from "../images/jumps_gif.gif";
import HomeCard from '../Components/HomeCard';
import { GoTasklist } from 'react-icons/go';
import { BsAlarm } from 'react-icons/bs';
import { GiNightSleep } from 'react-icons/gi';
import { IoWaterOutline } from 'react-icons/io';
import { MdOutlineWaterDrop } from 'react-icons/md'
import { TbApple } from 'react-icons/tb'; 
 
import { Sidebar, Navbar } from '../Components'


const HomeScreen = () => {
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>
      
      <div className="flex flex-col w-fit mr-60">
        <Navbar />

        <div className="h-screen bg-white pt-16 mr-80">
          <h1 className='text-4xl font-bold ml-8'>Funcfit Home</h1>
          <div className='flex flex-row ml-16'>
            <img src={reverse} className='h-1/2 w-800 mt-8' alt='reverse plank'/>
            <div className='h-400 w-400 grid grid-cols-2 justify-items-center ml-20 mb-20'>
              <HomeCard
                logo={<BsAlarm size={50}/>}
                title={'Wake up Alarm'}
              />
              <HomeCard
                logo={<GiNightSleep size={50}/>}
                title={'Daily Sleep Schedule'}
              />
              <HomeCard
                logo={<MdOutlineWaterDrop size={50}/>}
                title={'Water Intake Plan'}
              />
              <HomeCard
                logo={<TbApple size={50}/>}
                title={'Health Diet Plan'}
              />
            </div>
          </div>
          <h1 className='font-bold ml-16'>Next</h1>
          <div className='flex flex-row ml-16 mt-4'>
            <img src={running} className='h-32' alt='reverse plank'/>
            <img src={crawl} className='h-32 ml-4' alt='reverse plank'/>
            <img src={jumps} className='h-32 ml-4' alt='reverse plank'/>
            <img src={burpee} className='h-32 ml-4' alt='reverse plank'/>

          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeScreen