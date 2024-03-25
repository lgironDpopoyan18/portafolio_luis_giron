import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown } from 'react-icons/fa';
import Flutter from '../images/bannerFlutter.png';
import Progra from '../images/bannerProgra.jpeg';
import { motion } from 'framer-motion';

export default function CarouselImage() {
  return (
    <div id='start'>
      <Carousel
        dynamicHeight
        infiniteLoop={true}
        interval={6000}
        useKeyboardArrows={true}
        transitionTime={1700}
        emulateTouch
        showArrows={false}
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img className={classes.image} src={Flutter} alt='myImage' />
          <div className={classes.h1}>
            Hola soy Luis Girón
            <motion.h1
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }} // Define the scale values for the bouncing effect
              transition={{ duration: 3.3, repeat: Infinity }} // Set the duration and repeat
              whileHover={{
                scale: 1.1
              }}
            >
              <a
                href='https://drive.google.com/file/d/16jAL6XxO9waQrlDNaP1AKhJEvaKHFDl7/view?usp=sharing'
                rel='opener noreferrer'
                target='_blank'
              >
                Este es mi CV <FaArrowCircleDown />
              </a>
            </motion.h1>
          </div>
        </div>
        <div>
          <img className={classes.image} src={Progra} alt='myImage' />
          <div className={classes.h2}>
            <h1>Soy programador Flutter</h1>
            <h1>Y Reciente en Magento</h1>
            <a
              href='https://github.com/lgironDpopoyan18?tab=repositories'
              rel='opener noreferrer'
              target='_blank'
            >
              Estos son mis proyectos <GoProject />
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
