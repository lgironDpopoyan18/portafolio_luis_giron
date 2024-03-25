import React, { Component } from 'react';
import classes from './Interest.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>WHAT I DO?</span>
      <h2 className={classes.heading}>Mi experiencia es la siguiente</h2>
      <div className={classes.Interest}>
        {/* <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.web}>
          <h3>APP Develpoment</h3>
          <p>
            Tengo experiencia en Flutter donde e podido constuir apps para IOS y Android, donde
            he realizado implementaciones de Firebase, APIREST, librerias, actualizacion de librerias
            responsive adaptativo para Android y IOS, ademas cuento con conocimientos en Kotlin y JAVA
            para el desarrollo de apps 
          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.app}>
          <h3>Web Development</h3>
          <p>
            Para el apartado Web mi experiencia mas reciente es en Magento 2, tambien cuento con 
            conocimientos en HTML, CSS y conocimientos muy Basicos de React y JavaScript (comenzando 
            ruta de aprendizaje)
          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.other}>
          <h3>Expanded Expertise</h3>
          <p>
            Git, Docker, GitHub, Frontend System Design, Ui/Ux, Node.js, PostGreSQL, OWASP,
            SQL y PostMan.
          </p>
          <p>
            En modelos de trabajo cuento con experiencia en la metodolia AGILE y SCRUM.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
}
