/* import React from 'react'

import { GoArrowUpRight } from "react-icons/go"; */

import './App.css';
import users from '../images/users.png';
import logo from '../images/logo.png'

const App = () => {
  return (
    <>
      <div className="app container-fluid">
        <nav className='navbar navbar-expand-md bg-body-none'>
          <div className="container-fluid">
            <a href="#" className="navbar-brand"><img src={logo} alt="" height={70} width={80} /></a>
            <button className='navbar-toggler bg-light' type='button' data-bs-toggle="collapse" data-bs-target="#navbarToggler">
              <span className='navbar-toggler-icon bg-light'></span>
            </button>
            <div className="collapse navbar-collapse" id='navbarToggler'>
              <ul className='navbar-nav ms-auto me-auto mb-2 mb-md-0 h5'>
                <li className='nav-item'>
                  <a href="#" className="nav-link active fw-bold">Home</a>
                </li>
                <li className='nav-item'>
                  <a href="" className="nav-link fw-bold">About Us</a>
                </li>
                <li className='nav-item'><a href="" className="nav-link fw-bold">Programs</a></li>
                <li className='nav-item'>
                  <a href="" className="nav-link fw-bold">Blog</a>
                </li>
              </ul>
              <ul className='navbar-nav mb-2 mb-md-0'>
                <li className='nav-item'>
                  <a href="#" className="nav-link">
                    <button className='btn btn-outline-secondary text-dark fw-bold'>Start your journey</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section>
          <div className="container-fluid main">
            <div className="row">
              <div className="col-12 ps-5 mt-3">
                <div className="col-8 col-md-4">
                  <h1 className='display-2 fw-bold'>Transform <br />Your Body</h1>
                  <p className='ps-1 ps-md-3'>Achieve Your Fitness Goals With Personaliszed Workouts, Expert Nutrition Advice, And A Supportive Community</p>
                  <a href="" className='ps-1 ps-md-3'><button className='btn btn-secondary px-5 py-2 mt-3'>Try a Free Class</button></a>
                </div>
              </div>
              <div className="col-12 ps-5 mt-5">
                <div className="row g-5 ms-md-1">
                  <div className="col-auto pe-md-0">
                    <div className="col-6 d-flex flex-column align-items-center justify-content-between ">
                      <h3 className='fw-bold'>2.4k  </h3>
                      <img src={users} width={80} className='' />
                    </div>
                  </div>
                  <div className="col-auto ps-md-0">
                    <div className="col-7">
                      <h3 className='fw-bold'>10%</h3>
                      <p className='fw-bold' style={{fontSize:"12px"}}>Off Your First Month Consultation With A Trainer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className='fixed-bottom'>
          <p className=' text-center mb-0 text-secondary' style={{fontSize:"10px"}}>Image by <a href="https://www.freepik.com/free-photo/top-view-circular-sport-frame_7941447.htm#query=fitness%20background&position=2&from_view=keyword&track=ais_user&uuid=af8caeb5-709d-46e7-89ec-2ae994c9e659" className='text-secondary'>Freepik</a></p>
        </footer>
      </div>
    </>
  )
}

export default App