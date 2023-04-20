import styles from "../styles/bootcamp.module.css";

const BootcampPage = () => {
  return (
    <>
      <div id="bootcamp-info">
        <h2 className={styles.title}>Que es una Bootcamp?</h2>
        <p className={styles.info}>
          Una bootcamp es un tipo de programa de formación intensivo y enfocado
          en habilidades prácticas en un área específica, como la programación,
          la ciencia de datos o el diseño web. Estos programas suelen ser de
          corta duración, desde unas pocas semanas hasta varios meses, y están
          diseñados para proporcionar a los participantes una experiencia
          inmersiva y práctica en la materia.
        </p>
        <p className={styles.info}>
          Los bootcamps suelen ofrecer un plan de estudios estructurado y
          centrado en proyectos, con clases en persona, talleres y ejercicios
          prácticos. Son una opción popular para aquellos que buscan adquirir
          nuevas habilidades de manera rápida y eficiente para entrar en una
          nueva carrera u obtener una base solida para futuras aspiraciones.
        </p>
      </div>
      <div className={styles.line}></div>
      <div id="requisitos">
        <h2 className={styles.title}>Requisitos</h2>
        <p className={styles.info}>
          Esta puede ser una gran oportunidad para cualquier persona interesada
          en el mundo de las tecnologies, como pueden ser la cyberseguridad,
          inteligencia artificial, blockchain, aplicaciones web, etc. Los
          requisitos para los estudiantes que desean asistir la bootcamp son los
          siguientes:
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Tener 12 años de edad o estar asistiendo educacion secundaria (DBH).
          </li>
          <li className={styles.item}>
            Tener un nivel A2 de ingles, es decir, que tengas habilidades
            básicas de comunicación y lectura (titulo no necesario).
          </li>
          <li className={styles.item}>
            Lo mas importante, tener ganas de aprender.
          </li>
        </ul>
      </div>
      <br />
      <div id="syllabus">
        <h2 className={styles.title}>Syllabus</h2>
        <h4 className={styles.subtitle}>Que aprenderas en el Bootcamp?</h4>
        <p className={styles.info}>
          <strong className={styles.strong}>Semana 1: </strong>
          Introduccion a la ciencia de la computacion, es decir, como funcionan
          los ordenadores.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Codigo binario, representacion, sintaxis y algoritmos.
          </li>
        </ul>
        <p className={styles.info}>
          <strong className={styles.strong}>Semana 2: </strong>
          Introducción a la programación con Python
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Conocer conceptos fundamentales de la programacion.Variables, tipos
            de datos, condiciones, operadores y funciones.
          </li>
        </ul>
        <p className={styles.info}>
          <strong className={styles.strong}>Semana 3: </strong>
          Aprender las bases de las estructuras de datos y como se guardan en
          memoria.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Arrays (matrices), listas y diccionarios
          </li>
          <li className={styles.item}>Hexadecimal, direcciones, pointers</li>
        </ul>
        <p className={styles.info}>
          <strong className={styles.strong}>Semana 4: </strong>
          Programación orientada a objetos con Java
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Conceptos básicos, clases, objetos, métodos y atributos, herencia,
            polimorfismo y encapsulamiento.
          </li>
        </ul>
        <p className={styles.info}>
          <strong className={styles.strong}>Semana 5: </strong>
          Introduccion a desarrollo web con HTML, CSS y Javascript
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Entender las bases de como se crea una pagina web utilizando
            elementos (HTML), hojas de estilo (CSS) y funciones con Javascript.
          </li>
        </ul>
        <p className={styles.info}>
          Cosas adicionales que se incluiran a lo largo de la bootcamp.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Como utilizar editores de codigo como VSCode y otras extensiones.
          </li>
          <li className={styles.item}>
            Las bases de como utilizar la linea de comandos con $BASH y CMD
          </li>
          <li className={styles.item}>
            Conocer atajos de teclado para optimizar el tiempo.
          </li>
        </ul>
      </div>
      <br />
      <div id="precio">
        <h2 className={styles.title}>Precio</h2>
        <p className={styles.info}>
          Los dias <strong>20</strong> y <strong>23</strong> de Junio, tendremos
          puertas abiertas para que qualquier persona interesada pueda venir e
          informarse mas de la bootcamp. Estos dias hablaremos de como se van ha
          estructurar las clases, como vamos a impartir el temario y
          responderemos qualquer pregunta.
        </p>
        <p className={styles.info}>
          Si decides inscribirte, te daremos acceso al bootcamp de 5 semanas (25
          horas en total), además formaras parte de nuestro canal de Discord
          donde publicaremos toda la materia de las clases y también dispondras
          de tutorias uno a uno de 30 minutos cada semana.
        </p>
        <p className={styles.info}>
          Nosotros creemos que la educación debe ser accesible y de calidad,
          enfocandose en las necesidades de cada uno de nuestros alumnos.
        </p>
        <p className={styles.info}>
          ¿Quieres sumergirte en el mundo de las tecnologías mientras aprendes
          inglés? Empieza ahora.
        </p>
        <p className={styles.info}>
          <strong>Invierte en tu futuro.</strong>
        </p>
        <div className={styles.price}>
          <div className={styles.price_item}>
            <span className={styles.euros}>450€</span>
            <span className={styles.subprice}>PRIMERA Y ÚNICA EDICÍON</span>
            <span className={styles.subprice}>VERANO 2023 ☀</span>
            <ul className={styles.cta_list}>
              <li className={styles.item}>50€ DE MATRÍCULA</li>
              <li className={styles.item}>400€ DE CLASES</li>
            </ul>
          </div>
          <div className={styles.financing_item}>
            <h2 className={styles.finance_title}>FINANCIACIÓN</h2>
            <p className={styles.subprice}>TRES PAGOS DE 150€</p>
            <ul className={styles.cta_list}>
              <li className={styles.weeks}>SEMANA 1 — 26 a 30 de Junio </li>
              <li className={styles.weeks}>SEMANA 3 — 10 a 14 de Julio </li>
              <li className={styles.weeks}>SEMANA 5 — 24 a 28 de Julio</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootcampPage;
