import React, { useState } from 'react'
import Header from '../components/Header'
import Heroimg from '../../public/Green.png'
import Footer from '@/components/Footer'
import { Tabs } from 'antd';

export default function index() {
const [tabId, setTabId] = useState(1)
  const items = [
    {
      key: 1,
      label: `Passenger`,
    },
    {
      key: 2,
      label: `Rider`,
    },
  ];

  const onChange = (key) => {
    setTabId(key);
  };

  const UserCard =()=>{
  return( 
  <div>
      <h2>Flask-Stack</h2>
            <form>
              <input type='text' placeholder='Pick up address'/>
              <input type='text' placeholder='Drop off address'/>
            </form>
          <div className='btn'>                  
          <a href='/passanger' >Request for Ride</a>
          </div>

  </div>)

  }

  const DriverCard =()=>{
  return( 
  <div>
      <h2>Get Ready for <br/>Test Ride</h2>
          <div className='btn'>                  
          <a href='/driver' >Drive Now</a>
          </div>

  </div>)

    }
  return (
    <>
      <Header/>
        <section className='hero' style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(122, 189, 31, 0.73)),url(${Heroimg.src})`}}>
          <div className='container'>
            <div className='request--box'>
            <Tabs defaultActiveKey={1} items={items} onChange={onChange}/>
            {tabId ==1? <UserCard/>:<DriverCard/>}
             
            </div>
          </div>
        </section>
      <Footer/>
     </>
  )
}