import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import peliculas from '../images/peliculas.png';
import flutterCounter from '../images/flutterCounter.png';
import layoutApp from '../images/layoutsFlutter.jpeg';
import conecta4 from '../images/conecta4.jpeg';
import github from '../images/github.png';
import productos from '../images/productos.jpeg';
import shared from '../images/shared.jpeg';

// Web projects
const flutterItem = [
  {
    link: 'https://github.com/lgironDpopoyan18/flutter1',
    title: 'APP Sencilla Contador ',
    techStack: 'Tech Stack: Flutter',
    desc: 'Imagen usada de Ejemplo',
    image: flutterCounter,
    color: '#0FFFFF',
    githubLink: 'https://github.com/lgironDpopoyan18/flutter1'
  },
  {
    link: 'https://github.com/lgironDpopoyan18/flutter2-',
    title: 'Venta de Productos (PRIVATE)',
    techStack: 'Tech Stack: Flutter',
    desc: 'Es un proyecto creado para visualizar una interfaz de inicio de sesion de un usuario, donde encontraremos validaciones, providers, forms, bastantes diseños y una simulacion de espera de petición.',
    image: productos,
    color: '#E5E483',
    githubLink: 'https://github.com/lgironDpopoyan18/flutter2-'
  },
  {
    link: 'https://github.com/lgironDpopoyan18/Layouts',
    title: 'Shared Preferences',
    techStack:'Tech Stack: Flutter',
    desc: 'Proyecto en flluter orientado a aprender las preferencias de usuario creando una aplicacion donde se guarden los cambios luego de un restart completo a la aplicación, los cambios que se guardan y se cambian son: el nombre, el tema de la pantalla y el genero.',
    image: shared,
    color: '#D2E0FB',
  },
  {
    link: 'https://github.com/lgironDpopoyan18/FlutterPeliculas',
    title: 'Flutter Peliculas',
    techStack: 'Tech Stack: Flutter',
    desc: 'peliculas Proyecto creado para la visualizacion de las peliculas que estan pasando en los cines, con su descripcion y actores, de igual manera las mas populares con su informacion, el tema de la pantalla y el genero.',
    image: peliculas,
    color: '#FEA1A1',
    githubLink: 'https://github.com/lgironDpopoyan18/FlutterPeliculas'
  },
  {
    link: 'https://github.com/lgironDpopoyan18/Dise-osFlutter',
    title: 'Diseños en Flutter',
    techStack: 'Tech Stack: Flutter',
    desc: 'App creada para ver los diferentes diseños basicos en flutter para que se usen en la interfaz de usuario',
    image: layoutApp,
    color: '#C1A4AA',
    githubLink: 'https://github.com/lgironDpopoyan18/Dise-osFlutter'
  },
  {
    link: 'https://github.com/lgironDpopoyan18/Conecta4',
    title: 'Conecta 4 Flutter (PRIVATE)',
    techStack: 'Tech Stack: Flutter, Firebase',
    desc: 'Aplicacion creada para jugar Conecta 4 contra otra persona',
    image: conecta4,
    color: '#FFA6C9',
    githubLink: 'https://github.com/lgironDpopoyan18/Conecta4'
  },
];



export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
        <a href={cardItem.link} className={classes.card} target='_blank'>
            <img
              src={cardItem.image}
              className={classes.card__image}
              alt=''
              style={{  height: '150px' }} 
            />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>Mi Trabajo</span>
      <h2 className={classes.heading}>APP PROJECTS FLUTTER</h2>
      <ul className={classes.cards}>
        {flutterItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      {/* </ScrollAnimation> */}
    </div>
  );
}
