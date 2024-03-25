import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Quien soy!!!</h2>
        <div className={classes.About}>
          <p>
            Hola mi nombre es <b>Luis Girón</b>. Soy un programador con experiencia en{' '}
            <b>Frontend</b>, <b>Web</b> & <b>Mobile App </b> con Flutter, adicionalmente tambien en Magento 2 Ecommerce.
            Actualmente estoy trabajando en{' '}
            <b>
              <a className={classes.link} target='_blank' href='https://popoyan.com/'>
                Agropecuaria Popoyan
              </a>
            </b>{' '}
            como <b>Trainee en Desarrollo</b>, me interesa mucho aportar innovaciones al proyecto y ser de ayuda 
            para que el proyecto crezca.
          </p>
          <p className={classes.br}>
            Me siento interezado en aprender nuevas tecnologias, en tener un crecimiento laboral y personal
            y que mis capacidades como desarrollador sean aprovechadas y puedan aportar a una buena causa, me
            encuentro estudiando la carrera de Ingenieria en Sistemas en la Universidad San Carlos de Guatemala
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;
