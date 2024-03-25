import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>Mi Trayectoria</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Experiencia <span>Marzo(2023) - Actualidad</span>
                      </h2>
                      <p>
                        Actualmente estoy trabajando como <b>Trainee en Desarrollo</b> en {' '}
                        <a target='_blank' href='https://popoyan.com/'>
                          <b> Agropecuaria Popoyan</b>.
                        </a>{' '}
                        Este es mi primer trabajo donde he desarrollado mas a fondo mis habilidades 
                        como programador adoptando skils, buenas practicas, conocimientos y certificaciones
                        que me ayudan a crecer como persona y como trabajador formal.
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Universidad <span>2022 - Actualidad</span>
                      </h2>
                      <p>
                        Comenze la carrera de Ingenieria en Ciencias y Sistemas en la Universidad San Carlos de Guatemala (USAC) donde actualmente
                        continuo con mis estudios
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Bachillerato <span>2020-2021</span>
                      </h2>
                      <p>
                       Comenze mi Bachillerato en el Colegio Salesiano Don Bosco de Guatemala, obteniendo el
                       reconocimiento de Maga Cum Laude (promedio de 90 a 94.99 puntos) y el Diploma de Perseverancia 
                       el cual es un reconocimiento que da el establecimiento por estar desde 1 primaria hasta 5 Bachillerato 
                       en las instalaciones (2011 - 2021){' '}
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}

                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Education;
