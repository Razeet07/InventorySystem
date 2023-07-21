import React from 'react'
import Header from '../components/Header'
import Heroimg from '../../public/Green.png'
import Footer from '../components/Footer'
export default function index() {
  return (
    <>
      <Header/>
        <section className='hero' style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(122, 189, 31, 0.73)),url(${Heroimg.src})`}}>
          <div className='container'>
            <div className='request--box'>
              <h2>Flask-Stack</h2>
              <form>
                    <input type='text' placeholder='Pick up address'/>
                    <input type='text' placeholder='Drop off address'/>
                  </form>
                <div className='btn'>
                  
                  <a href='/login' >ADD PRODUCT</a>
                </div>
            </div>
          </div>
        </section>
      <Footer/>
     </>
  )
}