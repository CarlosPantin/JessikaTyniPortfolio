import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {FiArrowRight,FiArrowLeft} from "react-icons/fi";
import Image from "next/image";
import mypicture from "../public/MyPicture.png";
import webdesign from '../public/webdesign.png';
import datascience from '../public/datascience.png';
import webapplication from '../public/webapp.png';
import strength from '../public/strength.png'
import React from "react";
import webapp from '../public/WebAppScandi.png';
import { useState } from "react";



export default function Home() {
  
  
  
   
    const onButtonClick = () => {
        fetch('ResumeJessikaTyni.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'ResumeJessikaTyni.pdf';
                alink.click();
            })
        })
    }
    
    
    

           
        
    

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
    <div>
      <Head>
        <title>Jessika Tyni Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/cp.ico" />
      </Head>

      <main className=" bg-gradient-to-r from-blue-800  to-blue-500   px-10 md:px-20 lg:px-40 ">
        
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Jessika Tyni</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              
              <>
    
    <li>
        <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" onClick={onButtonClick}>
          Download Resume
        </button>
      </li>
</>
              

              
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-black font-medium dark:text-teal-400 md:text-6xl">
              Jessika Tyni
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Marketing            </h3>
            <p className="text-md py-5 leading-8 text-black md:text-xl max-w-xl mx-auto dark:text-white">
              Add Whatever you want here :D
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-black dark:text-gray-400">
              <a href=""><FiArrowRight /></a>
              <a href="https://www.linkedin.com/in/jessika-tyni-806222220/"><AiFillLinkedin /></a>
              <a href=""><FiArrowLeft /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full  relative overflow-hidden mt-20  sm:h-20 sm:w-20 md:h-96 md:w-96">
              <Image src={mypicture} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className="text-3xl py-1 text-black dark:text-white ">Skills I have developed</h3>
            <p className="text-lg py-2 leading-8 text-black text-center dark:text-gray-200">
              Since the beginning of my developer journey, I have developed a wide variety of projects both for study purposes and personal proejcts while using and learning a wide amount of technologies.
              
              
            </p>
            <p className="text-lg py-2 leading-8 text-black dark:text-gray-200">
              I am always thriving tolearn new techniques and adapt to new technologies. LEARNING NEVER ENDS!
            </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-2xl p-10 rounded-xl my-10">
                <div style={{display: "flex",justifyContent: "center",}}>
                <Image src={webdesign} width={100} height={100}/>
                </div>
                
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Web Design</h3>
                <p className="py-2 dark:text-white">
                  Both independently and throughout my studies, I learned web design with several projects, and COUNTLESS youtube videos, courses, and documentation!
                </p>
                <h2 className="py-4 text-teal-600">Tools I use</h2>
                <p className="text-gray-800 py-1 dark:text-white">React.js</p>
                <p className="text-gray-800 py-1 dark:text-white">JavaScript</p>
                <p className="text-gray-800 py-1 dark:text-white">HTML</p>
                <p className="text-gray-800 py-1 dark:text-white">CSS and frameworks</p>
              </div>
              <div className="text-center shadow-2xl p-10 rounded-xl my-10">
                <div style={{display: "flex",justifyContent: "center",}}>
                <Image src={webapplication} width={100} height={100}/>
                </div>
                
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Web Applications</h3>
                <p className="py-2 dark:text-white">
                  I have developed several web applications both for study purposes and several personal projects I did to practice my skills both front-end and back-end
                </p>
                <h2 className="py-4 text-teal-600">Tools I use</h2>
                <p className="text-gray-800 py-1 dark:text-white">PHP</p>
                <p className="text-gray-800 py-1 dark:text-white">JavaScript</p>
                <p className="text-gray-800 py-1 dark:text-white">jquery</p>
                <p className="text-gray-800 py-1 dark:text-white">MySql</p>
                <p className="text-gray-800 py-1 dark:text-white">Java</p>
                <p className="text-gray-800 py-1 dark:text-white">API's</p>
              </div>
              <div className="text-center shadow-2xl p-10 rounded-xl my-10">
                <div style={{display: "flex",justifyContent: "center",}}>
                <Image src={datascience} width={100} height={100}/>
                </div>
                
                
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Data Science</h3>
                <p className="py-2 dark:text-white">
                  Mainly using python and it's libraries, I have developed python codes consisting on predicting things based on the existing data. I have also worked with Big Data and automation processes.
                </p>
                <h2 className="py-4 text-teal-600">Tools I use</h2>
                <p className="text-gray-800 py-1 dark:text-white">Python</p>
                <p className="text-gray-800 py-1 dark:text-white">Pandas (Python Library)</p>
                <p className="text-gray-800 py-1 dark:text-white">Python Compilers</p>
                <p className="text-gray-800 py-1 dark:text-white">AI</p>
              </div>
            </div>
       
        </section>
        
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-900 dark:text-gray-200">
              As I'm closing the end of my studies, I am currently on my 3th year of studies, I am proud to have learned so much and developed several personal and study projects. I will showcase several of these projects down below!
              
              
            </p>
            
          </div>
          <h1 className="text-center mt-10 text-3xl dark:text-white">Web Application. Simple product Management</h1>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          
            <div className="basis-1/3 flex-1">
              <Image src={webapp} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              <p className="mt-6 dark:text-white">I made a simple product management system consisting on adding products with a unique SKU into the database, then displaying the products in containers with the option to mass delete selected products.</p>
            </div>
            
          </div>
        </section>
        <section>
        <h1 className="text-center text-3xl mt-8 dark:text-white">About Me</h1>
          <div>
            <div className="text-center">
              <h1 className="dark:text-white">My name is Carlos Pantin, born and raised in MEXICO, I am currently a 3th yaer student over at HAMK university of applied science in Finland. Since the year of 2020, I started studying the degree programme of Computer Applications and ever since that journey began, I've been developing a lot of taste and passion towards develeloping. As of recently, I've been very eager and excited to increase my professional portfolio and experience by seeking for Junior or trainee positions at a tech company.</h1>
            </div>
          </div>
          <div className="flex justify-center gap-10">
          <div className="text-center shadow-2xl p-10 rounded-xl my-10">
                <div style={{display: "flex",justifyContent: "center",}}>
                <Image src={strength} width={100} height={100}/>
                </div>
                
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">My Strengths</h3>
                <p className="py-2 dark:text-white">
                  I have developed several web applications both for study purposes and several personal projects I did to practice my skills both front-end and back-end
                </p>
                <p className="text-gray-800 py-1 dark:text-white">Fast Learner</p>
                <p className="text-gray-800 py-1 dark:text-white">Focused</p>
                <p className="text-gray-800 py-1 dark:text-white">Easy to Work With</p>
                <p className="text-gray-800 py-1 dark:text-white">Passionate</p>
                <p className="text-gray-800 py-1 dark:text-white">Punctual</p>
                <p className="text-gray-800 py-1 dark:text-white">Problem Solver</p>
              </div>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}

  

  
