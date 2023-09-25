import React from 'react'
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import Navbar from '../navitem/NavBar'

import './style.css'

import OrcaLogoHeader from "../../app/src/assets/images/OrcaLogoHeader.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import 'font-awesome/css/font-awesome.min.css';




export default function Header() {
  return (
    <header className="flex w-full z-30" style={{backgroundColor:'#08c5d6'}}>

<div className="container">
            <div className="logo-container">
                
                <Link href="/"  >
                  <Image className="logo" src={OrcaLogoHeader} alt=''/>
                </Link>
            </div>
            <input type="checkbox" name="" id="check">
            </input>
            <div className="nav-btn">
                <div className="nav-links">
                    <ul>
                        <li className="nav-link" >
                            <a href="#">Home</a>
                        </li>
                        <li className="nav-link" >
                            <a href="#">Menu<i className="fa fa-caret-down"></i></a>
                            <div className="dropdown">
                                <ul>
                                    <li className="dropdown-link">
                                        <a href="#">Link 1</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 2</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 3<i className="fa fa-caret-down"></i></a>
                                        <div className="dropdown second">
                                            <ul>
                                                <li className="dropdown-link">
                                                    <a href="#">Link 1</a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">Link 2</a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">Link 3</a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">More<i className="fa fa-caret-down"></i></a>
                                                    <div className="dropdown second">
                                                        <ul>
                                                            <li className="dropdown-link">
                                                                <a href="#">Link 1</a>
                                                            </li>
                                                            <li className="dropdown-link">
                                                                <a href="#">Link 2</a>
                                                            </li>
                                                            <li className="dropdown-link">
                                                                <a href="#">Link 3</a>
                                                            </li>
                                                            <div className="arrow"></div>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <div className="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 4</a>
                                    </li>
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link" >
                            <a href="#">Services<i className="fa fa-caret-down"></i></a>
                            <div className="dropdown">
                                <ul>
                                    <li className="dropdown-link">
                                        <a href="#">Link 1</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 2</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 3<i className="fa fa-caret-down"></i></a>
                                        <div className="dropdown second">
                                            <ul>
                                                <li className="dropdown-link">
                                                    <a href="#">Link 1</a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">Link 2</a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">Link 3</a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">More<i className="fa fa-caret-down"></i></a>
                                                    <div className="dropdown second">
                                                        <ul>
                                                            <li className="dropdown-link">
                                                                <a href="#">Link 1</a>
                                                            </li>
                                                            <li className="dropdown-link">
                                                                <a href="#">Link 2</a>
                                                            </li>
                                                            <li className="dropdown-link">
                                                                <a href="#">Link 3</a>
                                                            </li>
                                                            <div className="arrow"></div>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <div className="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 4</a>
                                    </li>
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link" >
                            <a href="#">About</a>
                        </li>
                    </ul>
                </div>

                <div className="log-sign" >
                    <a href="#" className="btn transparent">Log in</a>
                    <a href="#" className="btn solid">Sign up</a>
                </div>
            </div>

            <div className="hamburger-menu-container">
                <div className="hamburger-menu">
                    <div></div>
                </div>
            </div>
</div>
 
    </header>
    
  )
}
